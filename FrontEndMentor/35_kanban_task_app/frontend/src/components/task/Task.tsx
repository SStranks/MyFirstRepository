import styles from './_Task.module.scss';

type ElemProps = {
  taskId: string;
  columnId: string;
  boardId: string;
  title: string;
  numOfSubTasks: number;
  subTasksNumComplete: number;
  columnNum: number;
};

function Task(props: ElemProps): JSX.Element {
  const {
    taskId,
    columnId,
    boardId,
    title,
    numOfSubTasks,
    subTasksNumComplete,
    columnNum,
  } = props;

  return (
    <div
      className={`${styles.card} ${styles[`column--${columnNum}`]}`}
      // className={styles.card}
      data-task-id={taskId}
      data-column-id={columnId}
      data-board-id={boardId}>
      <p className={styles.card__task}>{title}</p>
      <p className={styles.card__subtask}>
        {subTasksNumComplete} of {numOfSubTasks} sub-tasks
      </p>
    </div>
  );
}

export default Task;
