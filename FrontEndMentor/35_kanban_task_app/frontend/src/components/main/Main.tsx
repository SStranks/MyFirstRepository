import styles from './Main.module.scss';

function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.main__empty}>
        <p>This board is empty. Create a new column to get started</p>
        <button type="button"> + Add New Column</button>
      </div>
    </main>
  );
}

export default Main;
