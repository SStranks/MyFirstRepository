import App from '#Components/App';
import { ErrorFallback } from '#Components/ui/RollbarErrorFallback';
import { RollbarErrorBoundary, RollbarProvider } from '#Lib/Rollbar';
import '#Sass/global-imports.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.querySelector('#root');
// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
// Alternative method to avoid non-null assertion:
// const root = createRoot(container as Element);

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
