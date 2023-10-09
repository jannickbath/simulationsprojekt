import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Tracks from './components/Tracks';
import '../src/styles/css/main.css';
import Header from './components/Header/Header';
import { useProgressLoop } from './Game';
import { useBoundStore } from './components/Zustand/useBoundStore';
import { Player } from './components/Zustand/Types';

const App = () => {
  useProgressLoop();
  const players = useBoundStore(state => state.players);
  const cars = useBoundStore(state => state.cars);
  const [winner, setWinner] = useState<null|Player>(null);

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
        console.log(winningPlayer);
        setWinner(winningPlayer);
      }
    }
  }, [cars, winner])

  return (
    <React.StrictMode>
      <div className="container">
        <Header />
        <Tracks />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);