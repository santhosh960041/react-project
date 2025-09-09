import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { HashRouter } from "react-router-dom"; // ⬅️ Import HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <WishlistProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </WishlistProvider>
  </CartProvider>
);

reportWebVitals();
