/* eslint-disable react/prop-types */
import { ErrorBoundary, Provider } from '@rollbar/react';

const rollbarConfig = {
  enabled: process.env.ROLLBAR_ENABLED,
  accessToken: process.env.ROLLBAR_POST_CLIENT_ITEM,
  environment: process.env.NODE_ENV,
};

function RollbarProvider({ children }) {
  return <Provider config={rollbarConfig}>{children}</Provider>;
}

function RollbarErrorBoundary({ children, fallbackUI }) {
  return <ErrorBoundary fallbackUI={fallbackUI}>{children}</ErrorBoundary>;
}

export { RollbarErrorBoundary, RollbarProvider };
