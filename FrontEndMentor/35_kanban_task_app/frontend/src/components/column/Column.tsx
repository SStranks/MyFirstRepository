import type { ITask, ISubTask } from '#Shared/types';
import Task from '#Components/task/Task';
import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import styles from './_Column.module.scss';

type TProps = {
  dndProvided: DroppableProvided;
  dndSnapshot: DroppableStateSnapshot;
  boardId: string;
  columnId: string;
  columnNum: number;
  columnTitle: string;
  numOfTasks: number;
  tasks: ITask[];
};

function Column(props: TProps): JSX.Element {
  const {
    dndProvided,
    dndSnapshot,
    boardId,
    columnId,
    columnNum,
    columnTitle,
    numOfTasks,
    tasks,
  } = props;

  const tasksCards = tasks.map((el, i) => {
    const completedSubTasks = el.subtasks.filter(
      (obj: ISubTask) => obj.isCompleted === true
    ).length;
    return (
      <Draggable key={el._id} draggableId={el._id} index={i}>
        {(provided, snapshot) => (
          <Task
            dndProvided={provided}
            dndSnapshot={snapshot}
            boardId={boardId}
            columnId={columnId}
            taskId={el._id}
            title={el.title}
            numOfSubTasks={el.subtasks.length}
            subTasksNumComplete={completedSubTasks}
            columnNum={columnNum}
          />
        )}
      </Draggable>
    );
  });

  return (
    <div
      className={`${styles.column} ${
        dndSnapshot.isDraggingOver ? styles[`droppable--${columnNum}`] : ''
      }`}
      data-column-id={columnId}
      ref={dndProvided.innerRef}>
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
      {dndProvided.placeholder}
    </div>
  );
}

export default Column;
