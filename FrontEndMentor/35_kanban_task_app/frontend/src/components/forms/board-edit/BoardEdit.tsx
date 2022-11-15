import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { useState } from 'react';
import styles from './_BoardEdit.module.scss';

type newFormDataType = {
  'input-title': { value: string; error: boolean; name: string };
  subtasks: {
    value: string;
    error: boolean;
    key: number;
    name: string;
    listId: number;
  }[];
};

type ElemProps = {
  boardName: string;
  boardColumns: string[];
};

function BoardEdit(props: ElemProps): JSX.Element {
  const { boardName, boardColumns } = props;

  const [formData, setFormData] = useState({
    'input-title': { value: boardName, error: false, name: 'input-title' },
    subtasks: [
      ...boardColumns.map((column, i, arr) => ({
        value: column,
        error: false,
        key: arr.length - i,
        name: `input-subtask-${arr.length - i}`,
        listId: arr.length - i,
      })),
    ],
  });
  const genId = useComponentIdGenerator();

  console.log('render');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if each formData input is empty. If true, add a new object to newFormData for each empty input.
    const newFormData = {} as newFormDataType;
    if (formData['input-title'].value === '')
      newFormData['input-title'] = {
        ...formData['input-title'],
        value: '',
        error: true,
      };
    if (formData.subtasks.some((subtask) => subtask.value === '')) {
      const newSubtasks = formData.subtasks.map((column) => {
        if (!column.value) return { ...column, error: true };
        return column;
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

  const btnNewColumnClickHandler = () => {
    const uniqueId = genId();
    const newColumn = {
      value: '',
      error: false,
      key: uniqueId,
      name: `input-subtask-${uniqueId}`,
      listId: uniqueId,
    };
    setFormData((prev) => ({
      ...prev,
      subtasks: [...prev.subtasks, newColumn],
    }));
  };

  const columns = formData.subtasks.map((subtask) => (
    <InputTextSubtask
      key={subtask.key}
      name={subtask.name}
      value={subtask.value}
      error={subtask.error}
      setFormData={setFormData}
      listId={subtask.listId}
    />
  ));

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form__title}>Edit Board</p>
        <div className={styles.form__group}>
          <p>Name</p>
          <InputText
            name={formData['input-title'].name}
            placeholder="e.g. Web Design"
            value={formData['input-title'].value}
            error={formData['input-title'].error}
            setFormData={setFormData}
          />
        </div>
        <div className={styles.form__group}>
          <p>Columns</p>
          <div className={styles['form__sub-tasks']}>{columns}</div>
          <button
            type="button"
            className={styles['form__btn-new-column']}
            onClick={btnNewColumnClickHandler}>
            + Add New Column
          </button>
        </div>
        <button type="submit" className={styles['form__btn-create-board']}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BoardEdit;
