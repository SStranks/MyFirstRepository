import ColumnGrid from '#Components/column-grid/ColumnGrid';
import RootModalDispatchContext from '#Context/RootModalContext';
import { TBoard } from '#Types/types';
import { useContext } from 'react';
import styles from './_Main.module.scss';

type ElemProps = {
  activeBoard: TBoard;
};

function Main(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const modalDispatch = useContext(RootModalDispatchContext);
  const isBoardEmpty = (activeBoard as TBoard)?.columns.length === 0;

  const addNewBtnClickHandler = () => {
    modalDispatch({
      type: 'open-modal',
      modalType: 'board-edit',
      modalProps: { activeBoard },
    });
  };

  const emptyBoard = (
    <div className={styles.main__empty}>
      <p>This board is empty. Create a new column to get started</p>
      <button type="button" onClick={addNewBtnClickHandler}>
        {' '}
        + Add New Column
      </button>
    </div>
  );

  return (
    <main className={styles.main}>
      {isBoardEmpty ? emptyBoard : <ColumnGrid activeBoard={activeBoard} />}
    </main>
  );
}

export default Main;
