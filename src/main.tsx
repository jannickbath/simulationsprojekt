import React from 'react'
import ReactDOM from 'react-dom/client'
import Tracks from './components/Tracks'
import "../src/styles/css/main.css";
import Header from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Tracks />
    </div>
  </React.StrictMode>,
)
