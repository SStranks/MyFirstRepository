import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import InputTextArea from '#Components/custom/input-textarea/InputTextArea';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { useEffect, useState } from 'react';
import styles from './_TaskAdd.module.scss';

function TaskAdd(): JSX.Element {
  const [subtasks, setSubTasks] = useState<JSX.Element[] | []>([]);
  const [formError, setFormError] = useState(false);
  const genId = useComponentIdGenerator();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const inputData = Object.fromEntries(formData.entries());
    console.log(inputData);

    // Check if any of the inputs are empty; set component global error
    if (Object.entries(inputData).some((input) => input[1] === '')) {
      setFormError(true);
      // eslint-disable-next-line no-return-assign
      setSubTasks((prev) =>
        [...prev].map((el) => (el.props?.formError = true))
      );
    }
  };

  const deleteFn = (listId: number): void => {
    setSubTasks((prev) => prev.filter((el) => el.props.listId !== listId));
  };

  useEffect(() => {
    const subtaskListItem = () => {
      const id = genId();
      return (
        <InputTextSubtask
          key={id}
          name={`input-subtask-${id}`}
          listId={id}
          deleteFn={deleteFn}
          formError={formError}
          setFormError={setFormError}
        />
      );
    };
    const subtaskInitialArr = [subtaskListItem(), subtaskListItem()];
    setSubTasks(subtaskInitialArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genId]);

  const btnNewSubtaskClickHandler = () => {
    const id = genId();
    setSubTasks((prev) => [
      ...prev,
      <InputTextSubtask
        key={id}
        name={`input-subtask-${id}`}
        listId={id}
        deleteFn={deleteFn}
        formError={formError}
        setFormError={setFormError}
      />,
    ]);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form__title}>Add New Task</p>
        <div className={styles.form__group}>
          <p>Title</p>
          <InputText
            name="input-title"
            placeholder="e.g. Take coffee break"
            formError={formError}
            setFormError={setFormError}
          />
        </div>
        <div className={styles.form__group}>
          <p>Description</p>
          <InputTextArea
            name="input-description"
            placeholder="It's always good to take a break. This 15 minute break will recharge the batteries a little"
            formError={formError}
            setFormError={setFormError}
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
            name="input-status"
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
