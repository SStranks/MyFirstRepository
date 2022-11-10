import styles from './_BoardDel.module.scss';

function BoardDelete(): JSX.Element {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.form__title}>Delete this board?</p>
        <p className={styles.form__description}>
          Are you sure you want to delete the &apos;Platform Launch&apos; board?
          This action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className={styles['form__btn-group']}>
          <button type="submit" className={styles['form__btn-delete']}>
            Delete
          </button>
          <button type="submit" className={styles['form__btn-cancel']}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardDelete;
