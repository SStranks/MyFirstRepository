import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import styles from './_Task.module.scss';

type ElemProps = {
  dndProvided: DroppableProvided;
  dndSnapshot: DroppableStateSnapshot;
};

function DeleteTask(props: ElemProps): JSX.Element {
  const { dndProvided, dndSnapshot } = props;
  const { isDraggingOver } = dndSnapshot;

  return (
    <div
      className={`${styles.deleteCard} ${
        isDraggingOver ? styles.deleteCard__dragging : ''
      }`}
      ref={dndProvided.innerRef}>
      <p className={styles.deleteCard__text}>Delete Task</p>
      {dndProvided.placeholder}
    </div>
  );
}

export default DeleteTask;
