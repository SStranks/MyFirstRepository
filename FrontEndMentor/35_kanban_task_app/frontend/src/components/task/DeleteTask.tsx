import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import styles from './_Task.module.scss';

type TProps = {
  dndProvided: DroppableProvided;
  dndSnapshot: DroppableStateSnapshot;
  numOfTasks: number;
  dragActive: boolean;
};

function DeleteTask(props: TProps): JSX.Element {
  const { dndProvided, dndSnapshot, numOfTasks, dragActive } = props;
  const { isDraggingOver } = dndSnapshot;

  return (
    <div
      className={`${styles.deleteCard} ${
        isDraggingOver ? styles.deleteCard__dragging : ''
      } ${dragActive && numOfTasks > 0 ? '' : 'invisible'}`}
      ref={dndProvided.innerRef}>
      <p className={styles.deleteCard__text}>Delete Task</p>
      {dndProvided.placeholder}
    </div>
  );
}

export default DeleteTask;
