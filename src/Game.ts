import { useEffect, useRef, useState } from 'react';
import { useBoundStore } from './components/Zustand/useBoundStore';
import { calculateProgressbyWordsPerMinute, calculateWordsPerMinute, countWords } from './HelperFunctions';

export function useStartGame() {
  const startGame = useBoundStore((state) => state.start);
  const updateSpeed = useBoundStore((state) => state.updateSpeed);
  const players = useBoundStore((state) => state.players);
  const npcs = players.filter((player) => !player.human);
  
  return () => {
    startGame();
    npcs.forEach((npc) => {
      const min = 40;
      const max = 100;
      const randomWPM = Math.floor(Math.random() * (max - min + 1)) + min;
      updateSpeed(npc.id, randomWPM);
    });
  };
}

export function useStopGame() {
  const stopGame = useBoundStore((state) => state.stop);

  return () => {
    stopGame();
  };
}

export function useRestartGame() {
  const clearPlayers = useBoundStore(state => state.clearPlayers);
  const clearCars = useBoundStore(state => state.clearCars);
  const resetLeaderboard = useBoundStore(state => state.resetLeaderboard);

  return () => {
    clearPlayers();
    clearCars();
    resetLeaderboard();
  }
}

export function useProgressLoop() {
  const [mainInterval, setMainInterval] = useState<number>();
  const updateProgress = useBoundStore((state) => state.updateProgress);
  const updateSpeed = useBoundStore((state) => state.updateSpeed);
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
        const progress = calculateProgressbyWordsPerMinute(
          npc.speed,
          countWords(initialText),
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
      const prevArrayWords =
        countWords(typedText) - 1;
      const wpm = calculateWordsPerMinute(prevArrayWords, startSeconds);
  
      if (humanPlayer) {
        updateSpeed(humanPlayer.id, wpm);
      }
  
      const calculatedPercentage = calculateProgressbyWordsPerMinute(
        wpm,
        countWords(initialText),
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
