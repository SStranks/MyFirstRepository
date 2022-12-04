import styles from './_Column.module.scss';

function ColumnEmpty(): JSX.Element {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const newColumnBtnClickHandler = () => {
    return console.log('clicked');
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
