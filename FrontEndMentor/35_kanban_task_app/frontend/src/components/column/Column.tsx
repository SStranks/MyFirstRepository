import Task from '#Components/task/Task';
import styles from './_Column.module.scss';

function Column(): JSX.Element {
  return (
    <div className={styles.column}>
      <div className={styles.status}>
        <div className={styles.status__bullet} />
        <p className={styles.status__title}>TODO (4)</p>
      </div>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default Column;
