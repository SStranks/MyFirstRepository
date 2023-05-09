import styles from './_Fallback.module.scss';

function Fallback(): JSX.Element {
  return (
    <div className={`${styles.fallback} ${styles['fallback-fadein']}`}>
      <div className={styles.fallback__bars}>
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
      </div>
      <p className={styles.fallback__loading}>Loading</p>
    </div>
  );
}

export default Fallback;
