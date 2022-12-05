import RootModalDispatchContext from '#Context/RootModalContext';
import { useContext } from 'react';
import styles from './_Column.module.scss';

function ColumnEmpty(): JSX.Element {
  const rootModalDispatch = useContext(RootModalDispatchContext);
  const newColumnBtnClickHandler = () => {
    console.log('COLUMN EMPTY', rootModalDispatch);
    rootModalDispatch({ type: 'show-modal', modalType: 'From column empty' });
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
