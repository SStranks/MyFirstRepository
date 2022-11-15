import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import InputTextArea from '#Components/custom/input-textarea/InputTextArea';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { useState } from 'react';
import styles from './_TaskEdit.module.scss';

type newFormDataType = {
  title?: { value: string; error: boolean };
  description?: { value: string; error: boolean };
  subtasks?: {
    value: string;
    error: boolean;
    key: number;
    name: string;
    listId: number;
  }[];
};

type ElemProps = {
  taskTitle: string;
  taskDescription?: string;
  taskSubtasks: string[];
  taskStatus: { current: string; statusArr: string[] };
};

function TaskEdit(props: ElemProps): JSX.Element {
  const { taskTitle, taskDescription = '', taskSubtasks, taskStatus } = props;

  console.log(taskSubtasks);

  const genId = useComponentIdGenerator();
  const [formData, setFormData] = useState({
    title: { value: taskTitle, error: false },
    description: { value: taskDescription, error: false },
    status: {
      current: taskStatus.current,
      statusArr: [...taskStatus.statusArr],
    },
    subtasks: [
      ...taskSubtasks.map((subtask, i, arr) => ({
        value: subtask,
        error: false,
        key: arr.length - i,
        name: `input-subtask-${arr.length - i}`,
        listId: arr.length - i,
      })),
    ],
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if each formData input is empty. If true, add a new object to newFormData for each empty input.
    const newFormData = {} as newFormDataType;
    if (formData.title.value === '')
      newFormData.title = { value: '', error: true };
    if (formData.description.value === '')
      newFormData.description = { value: '', error: true };
    if (formData.subtasks.some((task) => task.value === '')) {
      const newSubtasks = formData.subtasks.map((task) => {
        if (!task.value) return { ...task, error: true };
        return task;
      });
      newFormData.subtasks = [...newSubtasks];
    }
    // If there are any empty inputs/objs in newFormData, abort form submission and update form state.
    if (Object.keys(newFormData).length > 0) {
      console.log(
        'form submit click',
        Object.keys(newFormData),
        newFormData,
        formData
      );
      return setFormData((prev) => ({ ...prev, ...newFormData }));
    }
    const formInputData = new FormData(e.target as HTMLFormElement);
    const inputData = Object.fromEntries(formInputData.entries());
    return console.log('FORM SUBMIT', inputData);
  };

  const btnNewSubtaskClickHandler = () => {
    const uniqueId = genId();
    const newSubTask = {
      value: '',
      error: false,
      key: uniqueId,
      name: `input-subtask-${uniqueId}`,
      listId: uniqueId,
    };
    setFormData((prev) => ({
      ...prev,
      subtasks: [...prev.subtasks, newSubTask],
    }));
  };

  const subTasks = formData.subtasks.map((task) => (
    <InputTextSubtask
      key={task.key}
      name={task.name}
      value={task.value}
      error={task.error}
      setFormData={setFormData}
      listId={task.listId}
    />
  ));

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form__title}>Edit Task</p>
        <div className={styles.form__group}>
          <p>Title</p>
          <InputText
            name="input-title"
            placeholder="e.g. Take coffee break"
            value={formData.title.value}
            error={formData.title.error}
            setFormData={setFormData}
          />
        </div>
        <div className={styles.form__group}>
          <p>Description</p>
          <InputTextArea
            name="input-description"
            placeholder="It's always good to take a break. This 15 minute break will recharge the batteries a little"
            value={formData.description.value}
            error={formData.description.error}
            setFormData={setFormData}
          />
        </div>
        <div className={styles.form__group}>
          <p>Sub-Tasks</p>
          <div className={styles['form__sub-tasks']}>{subTasks}</div>
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
            currentListItem={formData.status.current}
            listItems={['Todo', 'Doing', 'Done']}
          />
        </div>
        <button type="submit" className={styles['form__btn-save-form']}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default TaskEdit;
