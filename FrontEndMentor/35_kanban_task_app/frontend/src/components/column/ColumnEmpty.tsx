import RootModalDispatchContext from '#Context/RootModalContext';
import { TBoard } from '#Types/types';
import { useContext } from 'react';
import styles from './_Column.module.scss';

type ElemProps = {
  activeBoard: TBoard;
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
