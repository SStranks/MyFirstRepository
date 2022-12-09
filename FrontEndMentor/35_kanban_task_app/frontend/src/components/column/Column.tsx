/* eslint-disable no-underscore-dangle */
import Task from '#Components/task/Task';
import { TSubTaskObj, TTask } from '#Types/types';
import styles from './_Column.module.scss';

type ElemProps = {
  boardId: string;
  columnId: string;
  columnNum: number;
  columnTitle: string;
  numOfTasks: number;
  tasks: TTask[];
};

function Column(props: ElemProps): JSX.Element {
  const { boardId, columnId, columnNum, columnTitle, numOfTasks, tasks } =
    props;

  const tasksCards = tasks.map((el) => {
    const completedSubTasks = el.subtasks.filter(
      (obj: TSubTaskObj) => obj.isCompleted === true
    ).length;
    return (
      <Task
        key={el._id}
        boardId={boardId}
        columnId={columnId}
        taskId={el._id}
        title={el.title}
        numOfSubTasks={el.subtasks.length}
        subTasksNumComplete={completedSubTasks}
      />
    );
  });

  return (
    <div className={styles.column} data-column-id={columnId}>
      <div className={styles.status}>
        <div
          className={`${styles.status__bullet} ${
            styles[`status__bullet--${columnNum}`]
          }`}
        />
        <p className={styles.status__title}>
          {columnTitle} ({numOfTasks})
        </p>
      </div>
      {tasksCards}
    </div>
  );
}

export default Column;
