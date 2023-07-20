/* eslint-disable react/prop-types */
import styles from './_ErrorFallback.module.scss';

// NOTE:  Props for different packages
// React-Error-Boundary: error, resetErrorBoundary
// RollbarSDK: error, resetError
function ErrorFallback(props) {
  const { error, resetError } = props;
  return (
    <div className={styles.container}>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetError}>
        Reload App
      </button>
    </div>
  );
}

export default ErrorFallback;
