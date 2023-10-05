import { ReactNode } from 'react';
import { useBoundStore } from './components/Zustand/useBoundStore';

const Game: React.FC<{ children: ReactNode }> = ({ children }) => {
  const startGame = useBoundStore(state => state.start);
  const updateSpeed = useBoundStore(state => state.updateSpeed);
  const players = useBoundStore(state => state.players);
  const npcs = players.filter((player) => !player.human);

  function startRace() {
    startGame();
    npcs.forEach((npc) => {
      const min = 40;
      const max = 100;
      const randomWPM = Math.floor(Math.random() * (max - min + 1)) + min;
      updateSpeed(npc.id, randomWPM);
    });
  }

  return children;
};

export default Game;
