import styles from './_Task.module.scss';

function Task(): JSX.Element {
  return (
    <div className={styles.card}>
      <p className={styles.card__task}>Build UI for onboarding flow</p>
      <p className={styles.card__subtask}>0 of 3 substasks</p>
    </div>
  );
}

export default Task;
