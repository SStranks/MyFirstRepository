/* eslint-disable no-underscore-dangle */
import Task from '#Components/task/Task';
import { TSubTaskObj, TTask } from '#Types/types';
import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import styles from './_Column.module.scss';

type ElemProps = {
  dndProvided: DroppableProvided;
  dndSnapshot: DroppableStateSnapshot;
  boardId: string;
  columnId: string;
  columnNum: number;
  columnTitle: string;
  numOfTasks: number;
  tasks: TTask[];
};

function Column(props: ElemProps): JSX.Element {
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
      (obj: TSubTaskObj) => obj.isCompleted === true
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

  const onDragStyle = (
    isDraggingOver: boolean
    // eslint-disable-next-line unicorn/consistent-function-scoping
  ) => ({
    background: isDraggingOver ? 'blue' : '',
  });

  return (
    <div
      className={styles.column}
      data-column-id={columnId}
      ref={dndProvided.innerRef}
      style={onDragStyle(dndSnapshot.isDraggingOver)}>
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
