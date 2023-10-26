import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Tracks from './components/Tracks';
import '../src/styles/css/main.css';
import Header from './components/Header/Header';
import { useProgressLoop, useStopGame } from './Game';
import { useBoundStore } from './components/Zustand/useBoundStore';
import Winner from './components/Overlay/Winner';

const App = () => {
  useProgressLoop();
  const players = useBoundStore(state => state.players);
  const cars = useBoundStore(state => state.cars);
  const winner = useBoundStore(state => state.leaderboard.winner);
  const setWinner = useBoundStore(state => state.setWinner);
  const ui = useBoundStore(state => state.ui);
  const pushUi = useBoundStore(state => state.pushUi);
  const stopGame = useStopGame();

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
        pushUi(<Winner player={winningPlayer}/>);
        stopGame();
      }
    }
  }, [cars, winner])

  return (
    <React.StrictMode>
      <div className="container">
        <Header />
        <Tracks />
        {ui.map(popup => popup)}
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);