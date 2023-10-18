import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import { useContext } from 'react';
import styles from './_BoardDel.module.scss';

type ElemProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function BoardDelete(props: ElemProps): JSX.Element {
  const { activeBoardId, setActiveBoardId } = props;
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);
  const state = useContext(AppStateContext);

  const deleteBtnClickHandler = () => {
    (async () => {
      try {
        const response = await fetch(
          `${process.env.API_HOST}/api/v1/boards/${activeBoardId}`,
          { method: 'DELETE', headers: { 'Content-Type': 'application/json' } }
        );

        if (!response.ok)
          throw new Error(`${response.status}: ${response.statusText}`);

        appDispatch({
          type: 'delete-board',
          payload: { id: { boardId: activeBoardId }, data: { x: undefined } },
        });
        setActiveBoardId(state.boards[0]._id || '');
        return modalDispatch({ type: 'close-modal' });
      } catch (error) {
        console.error(error);
        return modalDispatch({
          type: 'open-modal',
          modalType: 'error',
          modalProps: { title: 'board deletion' },
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
        <p className={styles.form__title}>Delete this board?</p>
        <p className={styles.form__description}>
          Are you sure you want to delete the &apos;Platform Launch&apos; board?
          This action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className={styles.form__btnGroup}>
          <button
            type="button"
            onClick={deleteBtnClickHandler}
            className={styles.form__btnDelete}>
            Delete
          </button>
          <button
            type="button"
            onClick={cancelBtnClickHandler}
            className={styles.form__btnCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardDelete;
