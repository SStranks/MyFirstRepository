import styles from './_ErrorFallback.module.scss';

interface IErrorFallbackProps {
  error: Error | null;
  resetErrorBoundary: () => void;
}

// NOTE:  Props for different packages
// React-Error-Boundary: error, resetErrorBoundary
// RollbarSDK: error, resetError
function ErrorFallback(props: IErrorFallbackProps) {
  const { error, resetErrorBoundary } = props;
  return (
    <div className={styles.container}>
      <h1>Something went wrong</h1>
      <pre>{error?.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Reload App
      </button>
    </div>
  );
}

export { ErrorFallback };
export type { IErrorFallbackProps };
