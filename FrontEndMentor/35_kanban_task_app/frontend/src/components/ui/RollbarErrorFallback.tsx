import styles from './_ErrorFallback.module.scss';

interface IErrorFallbackProps {
  error: Error | null;
  resetError: () => void;
}

function ErrorFallback(props: IErrorFallbackProps) {
  const { error, resetError } = props;
  return (
    <div className={styles.container}>
      <h1>Something went wrong</h1>
      <pre>{error?.message}</pre>
      <button type="button" onClick={resetError}>
        Reload App
      </button>
    </div>
  );
}

export { ErrorFallback };
export type { IErrorFallbackProps };
