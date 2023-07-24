// import { ErrorBoundary, Provider } from '@rollbar/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/global-imports.scss';
import App from './components/App';
import ErrorFallback from './components/ui/ErrorFallback';
import { RollbarErrorBoundary, RollbarProvider } from './lib/Rollbar.js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RollbarProvider>
      <RollbarErrorBoundary fallbackUI={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </RollbarErrorBoundary>
    </RollbarProvider>
  </React.StrictMode>
);
