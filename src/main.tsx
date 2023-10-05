import React from 'react';
import ReactDOM from 'react-dom/client';
import Tracks from './components/Tracks';
import '../src/styles/css/main.css';
import Header from './components/Header/Header';
import Game from './Game';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Game>
      <div className="container">
        <Header />
        <Tracks />
      </div>
    </Game>
  </React.StrictMode>
);

// Prevent spacebar from scrolling down
document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.keyCode == 32) {
    event.preventDefault();
  }
});
