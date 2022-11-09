import styles from './_Task.module.scss';

type ElemProps = {
  title: string;
  numOfSubTasks: number;
  subTasksNumComplete: number;
};

function Task(props: ElemProps): JSX.Element {
  const { title, numOfSubTasks, subTasksNumComplete } = props;

  return (
    <div className={styles.card}>
      <p className={styles.card__task}>{title}</p>
      <p className={styles.card__subtask}>
        {subTasksNumComplete} of {numOfSubTasks} sub-tasks
      </p>
    </div>
  );
}

export default Task;
