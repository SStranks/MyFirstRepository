import ColumnGrid from '#Components/column-grid/ColumnGrid';
import styles from './_Main.module.scss';

type BoardData = {
  name: string;
  boardID: string;
  columns: Record<string, unknown> | [];
};

type ElemProps = {
  boardData: unknown;
};

function Main(props: ElemProps): JSX.Element {
  const { boardData } = props;
  const boardEmpty = (boardData as BoardData).columns.length === 0;

  const emptyBoard = (
    <div className={styles.main__empty}>
      <p>This board is empty. Create a new column to get started</p>
      <button type="button"> + Add New Column</button>
    </div>
  );

  return (
    <main className={styles.main}>
      {boardEmpty ? emptyBoard : <ColumnGrid />}
    </main>
  );
}

export default Main;
