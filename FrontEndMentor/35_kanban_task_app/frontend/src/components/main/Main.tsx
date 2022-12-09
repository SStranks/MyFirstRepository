import ColumnGrid from '#Components/column-grid/ColumnGrid';
import { TBoard } from '#Types/types';
import styles from './_Main.module.scss';

const emptyBoard = (
  <div className={styles.main__empty}>
    <p>This board is empty. Create a new column to get started</p>
    <button type="button"> + Add New Column</button>
  </div>
);

type ElemProps = {
  activeBoard: TBoard;
};

function Main(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const boardEmpty = (activeBoard as TBoard)?.columns.length === 0;

  return (
    <main className={styles.main}>
      {boardEmpty ? emptyBoard : <ColumnGrid activeBoard={activeBoard} />}
    </main>
  );
}

export default Main;
