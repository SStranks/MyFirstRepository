/* eslint-disable react/prop-types */
import { ErrorBoundary, Provider } from '@rollbar/react';

const rollbarConfig = {
  enabled: process.env.ROLLBAR_ENABLED,
  environment: process.env.NODE_ENV,
  endpoint: `${process.env.API_HOST}/rollbar`,
};

function RollbarProvider({ children }) {
  return <Provider config={rollbarConfig}>{children}</Provider>;
}

function RollbarErrorBoundary({ children, fallbackUI }) {
  return <ErrorBoundary fallbackUI={fallbackUI}>{children}</ErrorBoundary>;
}

export { RollbarErrorBoundary, RollbarProvider };
