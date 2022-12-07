/* eslint-disable no-underscore-dangle */
import Task from '#Components/task/Task';
import { SubTaskObjType, TaskType } from '#Types/types';
import ColumnEmpty from './ColumnEmpty';
import styles from './_Column.module.scss';

type ElemProps = {
  boardId: string;
  columnId: string;
  columnNum: number;
  columnTitle: string;
  numOfTasks: number;
  tasks: TaskType[];
  emptyCol: boolean;
};

function Column(props: ElemProps): JSX.Element {
  const {
    boardId,
    columnId,
    columnNum,
    columnTitle,
    numOfTasks,
    tasks,
    emptyCol,
  } = props;

  const tasksCards = tasks.map((el) => {
    const completedSubTasks = el.subtasks.filter(
      (obj: SubTaskObjType) => obj.isCompleted === true
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
      <div className={`${styles.status} ${emptyCol ? 'invisible' : ''}`}>
        <div
          className={`${styles.status__bullet} ${
            styles[`status__bullet--${columnNum}`]
          }`}
        />
        <p className={styles.status__title}>
          {columnTitle} ({numOfTasks})
        </p>
      </div>
      {!emptyCol && tasksCards}
      {emptyCol && <ColumnEmpty />}
    </div>
  );
}

export default Column;
