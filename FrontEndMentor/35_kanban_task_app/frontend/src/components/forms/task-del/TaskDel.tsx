import styles from './_TaskDel.module.scss';

function TaskDelete(): JSX.Element {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.form__title}>Delete this task?</p>
        <p className={styles.form__description}>
          Are you sure you want to delete the &apos;Build settings UI&apos; task
          and its subtasks? This action cannot be reversed.
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
export default TaskDelete;
