import { IErrorFallbackProps } from '#Components/ui/RollbarErrorFallback';
import { ErrorBoundary, Provider } from '@rollbar/react';
import { PropsWithChildren } from 'react';
import Rollbar from 'rollbar';

interface IErrorBoundary {
  fallbackUI: React.ComponentType<IErrorFallbackProps> | undefined;
}

const rollbarConfig: Rollbar.Configuration = {
  enabled: !!process.env.ROLLBAR_ENABLED,
  accessToken: process.env.ROLLBAR_POST_CLIENT_ITEM,
  environment: process.env.NODE_ENV,
};

function RollbarProvider(props: PropsWithChildren): JSX.Element {
  const { children } = props;
  return <Provider config={rollbarConfig}>{children}</Provider>;
}

function RollbarErrorBoundary(props: PropsWithChildren<IErrorBoundary>) {
  const { children, fallbackUI } = props;
  return <ErrorBoundary fallbackUI={fallbackUI}>{children}</ErrorBoundary>;
}

export { RollbarErrorBoundary, RollbarProvider };
