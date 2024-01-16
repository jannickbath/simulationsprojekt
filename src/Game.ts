import { useEffect, useRef, useState } from 'react';
import { useBoundStore } from './components/Zustand/useBoundStore';
import { applyRandomOffset, calculateCharsPerMinute, calculateProgressByCharsPerMinute, calculateProgressByTypedChars, countChars } from './HelperFunctions';
import { QuotableApiResponse } from './components/Zustand/Types';
import { OriginalNpcSpeeds } from './Types';

export function useStartGame() {
  const startGame = useBoundStore((state) => state.start);
  const updatePlayerField = useBoundStore(state => state.updateField);
  const players = useBoundStore((state) => state.players);
  const npcs = players.filter((player) => !player.human);
  
  return () => {
    startGame();
    npcs.forEach((npc) => {
      const min = 200;
      const max = 500;
      const randomCPM = Math.floor(Math.random() * (max - min + 1)) + min;
      updatePlayerField(npc.id, "speed", randomCPM);
    });
  };
}

export function useRestartGame() {
  const { clearPlayers, resetLeaderboard, clearCars, updateProgress, stop } = useBoundStore(state => state);
  const replaceText = useReplaceText();
  const { players, cars } = useBoundStore(state => state);
  const humanPlayer = players.find(player => player.human);
  const humanCar = cars.find(cars => cars.id === humanPlayer?.carId);

  return () => {
    stop();
    clearPlayers();
    clearCars();
    resetLeaderboard();
    replaceText();
    
    if (humanCar) {
      updateProgress(humanCar.id, "0");
    }
  }
}

export function useReplaceText() {
  const { updateOriginalText, updateRemainingText, updateTypedText } = useBoundStore(state => state);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: QuotableApiResponse = await response.json();
      updateOriginalText(data.content);
      updateRemainingText(data.content);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return () => {
    updateTypedText("");
    updateRemainingText("");
    fetchRandomQuote();
  }
}

export function useProgressLoop() {
  const [mainInterval, setMainInterval] = useState<NodeJS.Timeout>();
  const updateProgress = useBoundStore((state) => state.updateProgress);
  const updatePlayerField = useBoundStore(state => state.updateField);
  const humanCar = useBoundStore((state) => state.getHumanCar)();
  const humanPlayer = useBoundStore((state) => state.getHumanPlayer)();
  const players = useBoundStore((state) => state.players);
  const cars = useBoundStore((state) => state.cars);
  const npcs = players.filter((player) => !player.human);
  const initialText = useBoundStore(state => state.text.text);
  const startSeconds = useBoundStore(state => state.game.startSeconds);
  const gameStatus = useBoundStore(state => state.game.running);
  const typedTextStore = useBoundStore(state => state.text.typedText);
  const typedTextRef = useRef(typedTextStore);
  const originalNpcSpeeds = {} as OriginalNpcSpeeds;
  
  function updateNpcCars() {
    if (Object.keys(originalNpcSpeeds).length === 0) {
      npcs.forEach(npc => {
        originalNpcSpeeds[npc.id] = npc.speed;
      });
    }

    // Update npcs
    npcs.forEach((npc) => {
      const car = cars.find((car) => car.id === npc.carId);
      const speed = applyRandomOffset(10, 20, originalNpcSpeeds[npc.id]);
      
      if (car) {
        const progress = calculateProgressByCharsPerMinute(
          speed,
          countChars(initialText),
          startSeconds
        );
        updateProgress(car?.id, `${progress}`);
      }
    });
  }

  useEffect(() => {
    if (mainInterval) clearInterval(mainInterval);
    if (!gameStatus) return;

    const interval = setInterval(() => {
      const typedText = typedTextRef.current;

      // Update progress
      const prevArrayChars = countChars(typedText) - 1;
      const cpm = calculateCharsPerMinute(prevArrayChars, startSeconds);
  
      if (humanPlayer) {
        updatePlayerField(humanPlayer.id, "speed", cpm);
      }

      const calculatedPercentage = calculateProgressByTypedChars(countChars(typedText), countChars(initialText));

      if (humanCar) {
        updateProgress(humanCar.id, `${calculatedPercentage}`);
      }
  
      updateNpcCars();
    }, 1000);

    setMainInterval(interval);
  }, [gameStatus]);

  // Update the typedTextRef when typedText changes
  useEffect(() => {
    typedTextRef.current = typedTextStore;
  }, [typedTextStore]);
}
