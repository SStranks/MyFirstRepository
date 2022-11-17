import styles from './_Task.module.scss';

type ElemProps = {
  // NOTE:  id field: undefined should be removed; temporary, for JSON DEV (ids exist only for first task in each col)
  id: string | undefined;
  title: string;
  numOfSubTasks: number;
  subTasksNumComplete: number;
};

function Task(props: ElemProps): JSX.Element {
  const { id, title, numOfSubTasks, subTasksNumComplete } = props;

  return (
    <div className={styles.card} data-id={id}>
      <p className={styles.card__task}>{title}</p>
      <p className={styles.card__subtask}>
        {subTasksNumComplete} of {numOfSubTasks} sub-tasks
      </p>
    </div>
  );
}

export default Task;
