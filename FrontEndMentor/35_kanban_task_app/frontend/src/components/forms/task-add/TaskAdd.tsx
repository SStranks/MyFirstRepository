import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import InputTextArea from '#Components/custom/input-textarea/InputTextArea';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  genGroupInputs,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import { useState } from 'react';
import styles from './_TaskAdd.module.scss';

type ReturnData = {
  inputName: string;
  value: string;
  groupId?: string;
};

type ElemProps = {
  taskStatus: { current: string; statusArr: string[] };
};

const INITIAL_SUBTASKS = ['', ''];

// FUNCTION COMPONENT //
function TaskAdd(props: ElemProps): JSX.Element {
  const { taskStatus } = props;
  const [formData, setFormData] = useState({
    'input-title': { value: '', error: false, inputName: 'input-title' },
    'input-description': {
      value: '',
      error: false,
      inputName: 'input-description',
    },
    'input-status': {
      value: taskStatus.current,
      error: false,
      statusArr: [...taskStatus.statusArr],
      inputName: 'input-status',
    },
    'input-group-1': { ...genGroupInputs(INITIAL_SUBTASKS, 'subtask') },
  });
  const genId = useComponentIdGenerator();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if each formData input is empty. If true, add a new object to newFormData.
    const newFormData = validateInputs(formData);
    // If there are any empty inputs/objs in newFormData, abort form submission and merge the form state with the newFormData objs.
    if (Object.keys(newFormData).length > 0) {
      return setFormData(
        (prev) => ({ ...prev, ...newFormData } as typeof prev)
      );
    }
    const formInputData = new FormData(e.target as HTMLFormElement);
    const inputData = Object.fromEntries(formInputData.entries());
    return console.log('FORM SUBMIT', inputData);
  };

  const btnNewSubtaskClickHandler = () => {
    const uniqueId = `input-subtask-${genId()}`;
    setFormData((prev) => addInputToGroup(uniqueId, 'input-group-1', prev));
  };

  const returnDataHandler = (data: ReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      setFormData((prev) => updateInputFromGroup(data, prev));
    } else {
      setFormData((prev) => updateInput(data, prev));
    }
  };

  const deleteInputHandler = (data: ReturnData) => {
    // Update form data; distinguish if return data is part of an input-group or a single input
    if (data.groupId) {
      setFormData((prev) => deleteInputFromGroup(data, prev));
    } else {
      setFormData((prev) => deleteInputSingle(data, prev));
    }
  };

  const subTasks = Object.keys(formData['input-group-1']).map((key) => {
    const obj = formData['input-group-1'][key];
    return (
      <InputTextSubtask
        key={obj.key}
        inputName={obj.inputName}
        value={obj.value}
        groupId="input-group-1"
        error={obj.error}
        deleteInput={deleteInputHandler}
        returnData={returnDataHandler}
      />
    );
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form__title}>Add New Task</p>
        <div className={styles.form__group}>
          <p>Title</p>
          <InputText
            placeholder="e.g. Take coffee break"
            inputName={formData['input-title'].inputName}
            value={formData['input-title'].value}
            groupId={undefined}
            error={formData['input-title'].error}
            returnData={returnDataHandler}
          />
        </div>
        <div className={styles.form__group}>
          <p>Description</p>
          <InputTextArea
            placeholder="It's always good to take a break. This 15 minute break will recharge the batteries a little"
            inputName={formData['input-description'].inputName}
            value={formData['input-description'].value}
            groupId={undefined}
            error={formData['input-description'].error}
            returnData={returnDataHandler}
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
            currentListItem={formData['input-status'].value}
            listItems={formData['input-status'].statusArr}
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
