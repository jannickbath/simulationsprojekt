import { useEffect, useRef, useState } from 'react';
import { useBoundStore } from './components/Zustand/useBoundStore';
import { calculateCharsPerMinute, calculateProgressByCharsPerMinute, countChars } from './HelperFunctions';

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
  const { clearPlayers, resetLeaderboard, clearCars, updateTypedText, updateRemainingText, updateProgress, stop } = useBoundStore(state => state);
  const { players, cars } = useBoundStore(state => state);
  const humanPlayer = players.find(player => player.human);
  const humanCar = cars.find(cars => cars.id === humanPlayer?.carId);
  const originalText = useBoundStore(state => state.text.text);

  return () => {
    stop();
    clearPlayers();
    clearCars();
    resetLeaderboard();
    updateTypedText("");
    updateRemainingText(originalText);
    
    if (humanCar) {
      updateProgress(humanCar.id, "0");
    }
  }
}

export function useProgressLoop() {
  const [mainInterval, setMainInterval] = useState<number>();
  const updateProgress = useBoundStore((state) => state.updateProgress);
  const updatePlayerField = useBoundStore(state => state.updateField);
  const humanCar = useBoundStore((state) => state.getHumanCar)();
  const humanPlayer = useBoundStore((state) => state.getHumanPlayer)();
  const players = useBoundStore((state) => state.players);
  const cars = useBoundStore((state) => state.cars);
  const npcs = players.filter((player) => !player.human);
  const initialText = useBoundStore(state => state.text.text);
  const startSeconds = useBoundStore(state => state.game.startSeconds);
  const gameStatus = useBoundStore(state => state.game.started);
  const typedTextStore = useBoundStore(state => state.text.typedText);
  const typedTextRef = useRef(typedTextStore);
  
  function updateNpcCars() {
    // Update npcs
    npcs.forEach((npc) => {
      const car = cars.find((car) => car.id === npc.carId);
      if (car) {
        const progress = calculateProgressByCharsPerMinute(
          npc.speed,
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

    const id = setInterval(() => {
      const typedText = typedTextRef.current;

      // Update progress
      const prevArrayChars = countChars(typedText) - 1;
      const cpm = calculateCharsPerMinute(prevArrayChars, startSeconds);
  
      if (humanPlayer) {
        updatePlayerField(humanPlayer.id, "speed", cpm);
      }
  
      const calculatedPercentage = calculateProgressByCharsPerMinute(
        cpm,
        countChars(initialText),
        startSeconds
      );
  
      if (humanCar) {
        updateProgress(humanCar.id, `${calculatedPercentage}`);
      }
  
      updateNpcCars();
    }, 1000);

    setMainInterval(id);
  }, [gameStatus]);

  // Update the typedTextRef when typedText changes
  useEffect(() => {
    typedTextRef.current = typedTextStore;
  }, [typedTextStore]);
}
