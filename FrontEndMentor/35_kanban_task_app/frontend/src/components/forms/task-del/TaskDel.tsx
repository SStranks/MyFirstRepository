import { AppDispatchContext } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import { useContext } from 'react';
import styles from './_TaskDel.module.scss';

type ElemProps = {
  id: { boardId: string; columnId: string; taskId: string };
};

function TaskDelete(props: ElemProps): JSX.Element {
  const { id } = props;
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);

  const deleteBtnClickHandler = () => {
    const { boardId, columnId, taskId } = id;
    (async () => {
      try {
        const response = await fetch(
          `${process.env.API_HOST}/api/v1/boards/${boardId}/${columnId}/${taskId}`,
          {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok)
          throw new Error(`${response.status}: ${response.statusText}`);

        modalDispatch({ type: 'close-all', modalType: undefined });
        return appDispatch({
          type: 'delete-task',
          payload: { id, data: { x: undefined } },
        });
      } catch (error) {
        console.error(error);
        return modalDispatch({
          type: 'open-modal',
          modalType: 'error',
          modalProps: { title: 'task deletion' },
        });
      }
    })();
  };

  const cancelBtnClickHandler = () => {
    modalDispatch({ type: 'close-modal' });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.form__title}>Delete this task?</p>
        <p className={styles.form__description}>
          Are you sure you want to delete the &apos;Build settings UI&apos; task
          and its subtasks? This action cannot be reversed.
        </p>
        <div className={styles.form__btnGroup}>
          <button
            type="button"
            className={styles.form__btnDelete}
            onClick={deleteBtnClickHandler}>
            Delete
          </button>
          <button
            type="button"
            className={styles.form__btnCancel}
            onClick={cancelBtnClickHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskDelete;
