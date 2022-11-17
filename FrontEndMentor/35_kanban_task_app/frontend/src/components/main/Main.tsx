import ColumnGrid from '#Components/column-grid/ColumnGrid';
import styles from './_Main.module.scss';

type SubTaskObj = {
  title: string;
  isCompleted: boolean;
};

type Task =
  | {
      // NOTE:  id field: undefined should be removed; temporary, for JSON DEV (ids exist only for first task in each col)
      taskID?: string | undefined;
      title: string;
      description: string;
      status: string;
      subtasks: SubTaskObj[] | [];
    }[]
  | [];

type BoardData = {
  name: string;
  boardID: string;
  columns: { name: string; tasks: Task }[];
};

type ElemProps = {
  boardData: BoardData;
};

function Main(props: ElemProps): JSX.Element {
  const { boardData } = props;
  console.log('THIS IS BOARD DATA', boardData);

  const boardEmpty = (boardData as BoardData).columns.length === 0;

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
