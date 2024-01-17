

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import GameSimon from './components/gameSimon/GameSimon';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/simon" element={<GameSimon />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
