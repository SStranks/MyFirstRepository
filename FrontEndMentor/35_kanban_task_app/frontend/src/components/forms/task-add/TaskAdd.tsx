import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { useEffect, useState } from 'react';
import styles from './_TaskAdd.module.scss';

const submitHandler = () => {
  console.log('fired');
};

function TaskAdd(): JSX.Element {
  const [subtasks, setSubTasks] = useState<JSX.Element[] | []>([]);
  const genId = useComponentIdGenerator();

  const deleteFn = (listId: number): void => {
    setSubTasks((prev) => prev.filter((el) => el.props.listId !== listId));
  };

  useEffect(() => {
    const subtaskListItem = () => {
      const id = genId();
      return <InputTextSubtask key={id} listId={id} deleteFn={deleteFn} />;
    };
    const subtaskInitialArr = [subtaskListItem(), subtaskListItem()];
    setSubTasks(subtaskInitialArr);
  }, [genId]);

  const btnNewSubtaskClickHandler = () => {
    const id = genId();
    setSubTasks((prev) => [
      ...prev,
      <InputTextSubtask key={id} listId={id} deleteFn={deleteFn} />,
    ]);
  };

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
          <div className={styles['form__sub-tasks']}>{subtasks}</div>
          <button
            type="button"
            className={styles['form__btn-new-sub-task']}
            onClick={btnNewSubtaskClickHandler}>
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
