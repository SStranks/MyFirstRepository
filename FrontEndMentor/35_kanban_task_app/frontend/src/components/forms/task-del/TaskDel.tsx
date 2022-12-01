import { AppDispatchContext } from '#Context/AppContext';
import { useContext } from 'react';
import styles from './_TaskDel.module.scss';

type ElemProps = {
  id: { boardId: string; columnId: string; taskId: string };
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function TaskDelete(props: ElemProps): JSX.Element {
  const { id, setIsModalOpen } = props;
  const dispatch = useContext(AppDispatchContext);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const deleteBtnClickHandler = () => {
    const { boardId, columnId, taskId } = id;
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/boards/${boardId}/${columnId}/${taskId}`,
          {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) throw new Error('Board not deleted');

        setIsModalOpen(false);
        dispatch({
          type: 'delete-task',
          payload: { id, data: { x: undefined } },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const cancelBtnClickHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.form__title}>Delete this task?</p>
        <p className={styles.form__description}>
          Are you sure you want to delete the &apos;Build settings UI&apos; task
          and its subtasks? This action cannot be reversed.
        </p>
        <div className={styles['form__btn-group']}>
          <button
            type="button"
            className={styles['form__btn-delete']}
            onClick={deleteBtnClickHandler}>
            Delete
          </button>
          <button
            type="button"
            className={styles['form__btn-cancel']}
            onClick={cancelBtnClickHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskDelete;
