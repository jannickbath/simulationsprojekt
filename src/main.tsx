import React from 'react'
import ReactDOM from 'react-dom/client'
import Tracks from './components/Tracks'
import "../src/styles/css/main.css";
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './components/Redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <Header/>
        <Tracks/>
      </div>
    </Provider>
  </React.StrictMode>,
)