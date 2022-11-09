import styles from './_Column.module.scss';

function ColumnEmpty(): JSX.Element {
  return (
    <div className={styles['column-empty']}>
      <p>+ New Column</p>
    </div>
  );
}

export default ColumnEmpty;
