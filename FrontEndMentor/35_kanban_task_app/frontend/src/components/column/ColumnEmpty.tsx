import type { IBoard } from '#Shared/types';
import RootModalDispatchContext from '#Context/RootModalContext';
import { useContext } from 'react';
import styles from './_Column.module.scss';

type ElemProps = {
  activeBoard: IBoard;
};

function ColumnEmpty(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const rootModalDispatch = useContext(RootModalDispatchContext);
  const newColumnBtnClickHandler = () => {
    rootModalDispatch({
      type: 'open-modal',
      modalType: 'board-edit',
      modalProps: { activeBoard },
    });
  };

  return (
    <div className={styles.columnEmpty}>
      <button
        type="button"
        className={styles.columnEmpty__btn}
        onClick={newColumnBtnClickHandler}>
        <p>+ New Column</p>
      </button>
    </div>
  );
}

export default ColumnEmpty;
