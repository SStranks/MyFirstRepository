import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import InputTextArea from '#Components/custom/input-textarea/InputTextArea';
import { AppDispatchContext } from '#Context/AppContext';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { TaskType } from '#Types/types';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  genGroupInputs,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import React, { useContext, useState } from 'react';
import styles from './_TaskEdit.module.scss';

type ReturnData = {
  inputName: string;
  value: string;
  groupId?: string;
};

type ElemProps = {
  task: TaskType;
  columnList: string[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// FUNCTION COMPONENT //
function TaskEdit(props: ElemProps): JSX.Element {
  const { task, columnList, setIsModalOpen } = props;
  const dispatch = useContext(AppDispatchContext);
  const [formData, setFormData] = useState({
    'input-title': {
      value: task.title,
      error: false,
      inputName: 'input-title',
    },
    'input-description': {
      value: task.description,
      error: false,
      inputName: 'input-description',
    },
    'input-status': {
      value: task.status,
      error: false,
      statusArr: columnList,
      inputName: 'input-status',
    },
    'input-group-1': {
      ...genGroupInputs(
        task.subtasks.map((t) => t.title),
        'subtask'
      ),
    },
  });
  const genId = useComponentIdGenerator();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check if each formData input is empty. If true, add a new object to newFormData.
    const newFormData = validateInputs(formData);
    // If there are any empty inputs/objs in newFormData, abort form submission and merge the form state with the newFormData objs.
    if (Object.keys(newFormData).length > 0) {
      return setFormData(
        (prev) => ({ ...prev, ...newFormData } as typeof prev)
      );
    }
    // All form inputs have been validated. Submit form data.
    const formInputData = new FormData(e.target as HTMLFormElement);
    const inputData = Object.fromEntries(formInputData.entries());

    console.log(inputData);

    const newTask = 'bob';
    const taskId = 'test';

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/boards/6387378d5534f865a26aa4b3/6389dc14152baa2d6371b0d6/${taskId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: newTask,
        }
      );

      if (!response.ok) throw new Error('Error: Failed to submit');

      const content = await response.json();
      dispatch({
        type: 'task-edit',
        payload: { id: { boardId: 'THIS IS A TEST' }, data: content.data.data },
      });
      // TODO:  Set modal closed - need to figure out duel modals first before implementing.
      return console.log(setIsModalOpen);
    } catch (error) {
      // TODO:  Need to make an error modal or something to show failure.
      return console.log(error);
    }

    // return console.log('FORM SUBMIT', inputData);
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
        <p className={styles.form__title}>Edit Task</p>
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
            name={formData['input-status'].inputName}
            currentListItem={formData['input-status'].value}
            listItems={formData['input-status'].statusArr}
            returnData={returnDataHandler}
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
