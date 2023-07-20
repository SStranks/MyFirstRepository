import { PropsWithChildren } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ui/ReactErrorBoundaryErrorFallback';

type TError = Error | undefined;
type TInfo = {
  componentStack: string;
};

function logErrorToService(error: TError, info: TInfo): void {
  // Use your preferred error logging service
  console.error('Caught an error:', error, info);
}

function ErrorBoundary({ children }: PropsWithChildren) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logErrorToService}>
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
