// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import ThemeProvider from './context/ThemeContext.jsx';
import WalletContextProvider from './context/WalletContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <WalletContextProvider>
        <App/>
      </WalletContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
