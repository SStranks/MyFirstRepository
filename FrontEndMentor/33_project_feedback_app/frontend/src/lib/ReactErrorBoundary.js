/* eslint-disable react/prop-types */
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ui/ErrorFallback';

function logErrorToService(error, info) {
  // Use your preferred error logging service
  console.error('Caught an error:', error, info);
}

function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logErrorToService}>
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
