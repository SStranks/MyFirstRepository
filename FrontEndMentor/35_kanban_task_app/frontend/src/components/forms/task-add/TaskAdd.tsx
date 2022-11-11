import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import styles from './_TaskAdd.module.scss';

const submitHandler = () => {
  console.log('fired');
};

function TaskAdd(): JSX.Element {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form__title}>Add New Task</p>
        <div className={styles.form__group}>
          <p>Title</p>
          <input
            type="text"
            placeholder="e.g. Take coffee break"
            className={styles.form__input}
          />
        </div>
        <div className={styles.form__group}>
          <p>Description</p>
          <textarea
            className={`${styles.form__input} ${styles.form__textarea}`}
            placeholder="It's always good to take a break. This 15 minute break will recharge the batteries a little"
          />
        </div>
        <div className={styles.form__group}>
          <p>Sub-Tasks</p>
          <div className={styles['form__sub-tasks']}>
            <InputTextSubtask />
            <InputTextSubtask />
          </div>
          <button type="button" className={styles['form__btn-new-sub-task']}>
            + Add New Sub-Task
          </button>
        </div>
        <div className={styles.form__group}>
          <p>Status</p>
          <Dropdown
            currentListItem="Todo"
            listItems={['Todo', 'Doing', 'Done']}
          />
        </div>
        <button type="submit" className={styles['form__btn-create-task']}>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskAdd;
