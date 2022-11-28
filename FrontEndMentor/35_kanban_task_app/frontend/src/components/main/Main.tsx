import ColumnGrid from '#Components/column-grid/ColumnGrid';
import { Board } from '#Types/types';
import styles from './_Main.module.scss';

type ElemProps = {
  boardData: Board;
};

function Main(props: ElemProps): JSX.Element {
  const { boardData } = props;

  console.log('MAIN RENDER', boardData);

  const boardEmpty = (boardData as Board).columns.length === 0;

  const emptyBoard = (
    <div className={styles.main__empty}>
      <p>This board is empty. Create a new column to get started</p>
      <button type="button"> + Add New Column</button>
    </div>
  );

  return (
    <main className={styles.main}>
      {boardEmpty ? emptyBoard : <ColumnGrid boardData={boardData} />}
    </main>
  );
}

export default Main;
