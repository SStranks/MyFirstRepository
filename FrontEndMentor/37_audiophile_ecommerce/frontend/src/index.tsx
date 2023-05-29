import ScrollToTop from '#Hooks/ScrollToTop';
import BodyScrollToggle from '#Hooks/useBodyScrollToggle';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/global-imports.scss';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

const container = document.querySelector('#root');
// As per Official React 18 docs
// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
// Alternative method to avoid non-null assertion:
// const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <BodyScrollToggle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// serviceWorker.register();
