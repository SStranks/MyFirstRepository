import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import InputTextArea from '#Components/custom/input-textarea/InputTextArea';
import { AppDispatchContext } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import {
  TNestedInputProp,
  TReturnData,
  TSelectTask,
  TTask,
} from '#Types/types';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import React, { useContext, useState } from 'react';
import styles from './_TaskEdit.module.scss';

const genGroupInputs = (task: TTask) => {
  return task.subtasks.reduce((acc, cur) => {
    const key = `input-subtask-${cur._id}`;
    acc[key] = {
      value: cur.title,
      error: false,
      isCompleted: cur.isCompleted,
      key,
      inputName: `input-subtask-${cur._id}`,
    };
    return acc;
  }, {} as TNestedInputProp);
};

type ElemProps = {
  task: TTask;
  selectTask: TSelectTask;
  columnList: string[][];
};

function TaskEdit(props: ElemProps): JSX.Element {
  const { task, selectTask, columnList } = props;
  console.log(columnList);
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);
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
      columnId: selectTask.columnId,
      error: false,
      statusArr: columnList,
      inputName: 'input-status',
    },
    'input-group-1': {
      ...genGroupInputs(task),
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
    const {
      'input-title': title,
      'input-description': description,
      'input-status': status,
      ...rest
    } = Object.fromEntries(formInputData.entries());

    // Copy in old column data if applicable
    const newSubtasks = Object.entries(rest).map(([key, value]) => {
      const subtaskId = key.split('-')[2];
      const subtaskIdx = task.subtasks.findIndex((st) => st._id === subtaskId);

      return subtaskIdx !== -1
        ? { ...task.subtasks[subtaskIdx], title: value }
        : { title: value };
    });

    const newTask = {
      title,
      description,
      status,
      subtasks: newSubtasks,
    };

    const { boardId, columnId, taskId } = selectTask;
    const newColumnId = formData['input-status'].columnId;

    try {
      const response = await (columnId === newColumnId
        ? fetch(
            `http://${process.env.API_HOST}/api/v1/boards/${boardId}/${columnId}/${taskId}`,
            {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newTask),
            }
          )
        : fetch(
            `http://${process.env.API_HOST}/api/v1/boards/${boardId}/${columnId}`,
            {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ taskId, newColumnId, newTask }),
            }
          ));

      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const content = await response.json();

      appDispatch({
        type: 'update-task',
        payload: { id: { boardId }, data: content.data },
      });
      return modalDispatch({ type: 'close-all', modalType: undefined });
    } catch (error) {
      console.error(error);
      return modalDispatch({
        type: 'open-modal',
        modalType: 'error',
        modalProps: { title: task.title },
      });
    }
  };

  const btnNewSubtaskClickHandler = () => {
    const uniqueId = `input-subtask-${genId()}`;
    setFormData((prev) => addInputToGroup(uniqueId, 'input-group-1', prev));
  };

  const returnDataHandler = (data: TReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      setFormData((prev) => updateInputFromGroup(data, prev));
    } else {
      setFormData((prev) => updateInput(data, prev));
    }
  };

  const deleteInputHandler = (data: TReturnData) => {
    // Update form data; distinguish if return data is part of an input-group or a single input
    if (data.groupId) {
      setFormData((prev) => deleteInputFromGroup(data, prev));
    } else {
      setFormData((prev) => deleteInputSingle(data, prev));
    }
  };

  // DEBUG:  Key is the issue.
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
          <div className={styles.form__subTasks}>{subTasks}</div>
          <button
            type="button"
            className={styles.form__btnNewSubTask}
            onClick={btnNewSubtaskClickHandler}>
            + Add New Sub-Task
          </button>
        </div>
        <div className={styles.form__group}>
          <p>Status</p>
          <Dropdown
            name={formData['input-status'].inputName}
            currentListItem={formData['input-status'].value}
            listItems={columnList}
            returnData={returnDataHandler}
          />
        </div>
        <button type="submit" className={styles.form__btnSaveForm}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default TaskEdit;
