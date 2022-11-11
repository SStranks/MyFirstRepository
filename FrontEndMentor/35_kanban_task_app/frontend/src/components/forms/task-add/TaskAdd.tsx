import Dropdown from '#Components/custom/dropdown/Dropdown';
import IconCross from '#Svg/icon-cross.svg';
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
          <input type="text" placeholder="e.g. Take coffee break" />
        </div>
        <div className={styles.form__group}>
          <p>Description</p>
          <textarea placeholder="It's always good to take a break. This 15 minute break will recharge the batteries a little" />
        </div>
        <div className={styles.form__group}>
          <p>Sub-Tasks</p>
          <div className={styles['form__sub-tasks']}>
            <div className={styles['form__sub-tasks__input']}>
              <input type="text" placeholder="e.g. Make coffee" />
              <img src={IconCross} alt="" />
            </div>
            <div className={styles['form__sub-tasks__input']}>
              <input type="text" placeholder="e.g. Drink coffee and smile" />
              <img src={IconCross} alt="" />
            </div>
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
