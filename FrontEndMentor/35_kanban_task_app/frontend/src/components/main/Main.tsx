import ColumnGrid from '#Components/column-grid/ColumnGrid';
import styles from './_Main.module.scss';

function Main(): JSX.Element {
  // NOTE:  Temporary Dev: Switch between no columns and column grid
  const emptyColumns = false;

  return (
    <main className={styles.main}>
      {emptyColumns && (
        <div className={styles.main__empty}>
          <p>This board is empty. Create a new column to get started</p>
          <button type="button"> + Add New Column</button>
        </div>
      )}
      {!emptyColumns && <ColumnGrid />}
    </main>
  );
}

export default Main;
