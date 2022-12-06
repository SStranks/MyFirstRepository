import RootModalDispatchContext from '#Context/RootModalContext';
import { useContext } from 'react';
import styles from './_Column.module.scss';

function ColumnEmpty(): JSX.Element {
  const rootModalDispatch = useContext(RootModalDispatchContext);
  const newColumnBtnClickHandler = () => {
    // TODO:  Board-edit needs 'active board' props.
    rootModalDispatch({ type: 'open-modal', modalType: 'board-edit' });
  };

  return (
    <div className={styles['column-empty']}>
      <button
        type="button"
        className={styles['column-empty__btn']}
        onClick={newColumnBtnClickHandler}>
        <p>+ New Column</p>
      </button>
    </div>
  );
}

export default ColumnEmpty;
