import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import { useContext } from 'react';
import styles from './_BoardDel.module.scss';

type ElemProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function BoardDelete(props: ElemProps): JSX.Element {
  const { setIsModalOpen, activeBoardId, setActiveBoardId } = props;
  const dispatch = useContext(AppDispatchContext);
  const state = useContext(AppStateContext);

  const deleteBtnClickHandler = () => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/boards/${activeBoardId}`,
          { method: 'DELETE', headers: { 'Content-Type': 'application/json' } }
        );

        if (!response.ok) throw new Error('Board not deleted');

        dispatch({
          type: 'delete-board',
          payload: { id: { boardId: activeBoardId }, data: { x: undefined } },
        });
        setActiveBoardId(state.boards[state.boards.length - 2]._id);
        setIsModalOpen(false);
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
        <p className={styles.form__title}>Delete this board?</p>
        <p className={styles.form__description}>
          Are you sure you want to delete the &apos;Platform Launch&apos; board?
          This action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className={styles['form__btn-group']}>
          <button
            type="button"
            onClick={deleteBtnClickHandler}
            className={styles['form__btn-delete']}>
            Delete
          </button>
          <button
            type="button"
            onClick={cancelBtnClickHandler}
            className={styles['form__btn-cancel']}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardDelete;
