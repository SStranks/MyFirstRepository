/* eslint-disable react/jsx-props-no-spreading */
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import styles from './_Task.module.scss';

type ElemProps = {
  dndProvided: DraggableProvided;
  dndSnapshot: DraggableStateSnapshot;
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
    dndProvided,
    dndSnapshot,
    taskId,
    columnId,
    boardId,
    title,
    numOfSubTasks,
    subTasksNumComplete,
    columnNum,
  } = props;

  const { draggingOver, isDragging } = dndSnapshot;

  return (
    <div
      className={`${styles.card} ${styles[`column--${columnNum}`]} ${
        isDragging ? `${styles[`card__dragging--${draggingOver}`]}` : ''
      } ${
        draggingOver?.startsWith('delete')
          ? `${styles.card__hoverOverDelete}`
          : ''
      }`}
      data-task-id={taskId}
      data-column-id={columnId}
      data-board-id={boardId}
      ref={dndProvided.innerRef}
      {...dndProvided.draggableProps}
      {...dndProvided.dragHandleProps}>
      <p className={styles.card__task}>{title}</p>
      <p className={styles.card__subtask}>
        {subTasksNumComplete} of {numOfSubTasks} sub-tasks
      </p>
    </div>
  );
}

export default Task;
