// import { ErrorBoundary, Provider } from '@rollbar/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/global-imports.scss';
import App from './components/App';
import ErrorFallback from './components/ui/ErrorFallback';
import { RollbarErrorBoundary, RollbarProvider } from './lib/Rollbar.js';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RollbarProvider>
      <RollbarErrorBoundary fallbackUI={ErrorFallback}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RollbarErrorBoundary>
    </RollbarProvider>
  </React.StrictMode>
);
