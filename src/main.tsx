import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/css/main.css';
import { useProgressLoop, useReplaceText, useRestartGame } from './Game';
import { useBoundStore } from './components/Zustand/useBoundStore';
import Winner from './components/Overlay/Winner';
import Scene from './components/Scenes/Scene';
import Welcome from './components/Overlay/Welcome';
import { BarrierClass } from './components/items/Barrier';

const App = () => {
  useProgressLoop();
  const players = useBoundStore(state => state.players);
  const cars = useBoundStore(state => state.cars);
  const winner = useBoundStore(state => state.leaderboard.winner);
  const setWinner = useBoundStore(state => state.setWinner);
  const ui = useBoundStore(state => state.ui);
  const unshiftUi = useBoundStore(state => state.unshift);
  const unshiftItem = useBoundStore(state => state.itemUtility.unshift);
  const restartGame = useRestartGame();
  const replaceText = useReplaceText();
  const [loaded, setLoaded] = useState(false);
  let reactNodeCounter = 0;

  // Prevent spacebar from scrolling down
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  });

  useEffect(() => {
    if (winner) return;

    const winningCar = cars.find(car => car.progress === "100");
    if (winningCar) {
      const winningPlayer = players.find(player => player.carId == winningCar.id)
      if (winningPlayer) {
        setWinner(winningPlayer);
        unshiftUi(<Winner player={winningPlayer} key={reactNodeCounter++}/>);
        restartGame();
      }
    }
  }, [cars, winner])

  useEffect(() => {
    if (!loaded) {
      replaceText();
      unshiftUi(<Welcome key={reactNodeCounter++}/>);
      unshiftItem(new BarrierClass(1, 1, 250));
      unshiftItem(new BarrierClass(1, 1, 500));
      setLoaded(true);
    }
  }, [loaded])

  return (
    <React.StrictMode>
      <div className="container">
        <Scene type='road' />
        {ui.map(popup => popup)}
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);