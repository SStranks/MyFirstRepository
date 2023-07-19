import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/global-imports.scss';
import App from './components/App';
import Toaster from './lib/Toaster';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster />
  </React.StrictMode>
);
