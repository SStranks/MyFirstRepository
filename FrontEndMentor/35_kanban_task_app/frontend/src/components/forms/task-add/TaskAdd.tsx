import type { IBoard, IColumn } from '#Shared/types';
import type { IPostTaskRequestDTO } from '#Services/ApiRequestDto';
import { TAppStateContext, TReturnData } from '#Types/types';
import Dropdown from '#Components/custom/dropdown/Dropdown';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import InputTextArea from '#Components/custom/input-textarea/InputTextArea';
import {
  AppDispatchContext,
  AppStateContext,
  IAppContextPayload,
} from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import ApiService from '#Services/Services';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  genGroupInputs,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import { useContext, useState } from 'react';
import styles from './_TaskAdd.module.scss';

const extractData = (state: TAppStateContext, activeBoard: IBoard) => {
  console.log('TASKADD EXTRACT DATA');
  const board = state.boards.find((el) => el._id === activeBoard._id);
  // NOTE:  el.name, el._id
  const columnList = board?.columns.map((el) => [el.name, el._id]);
  if (!columnList) throw new Error('Incongruence in data!');
  return { columnList };
};

const INITIAL_SUBTASKS = ['', ''];

type ElemProps = {
  activeBoard: IBoard;
  taskStatus: { current: string; statusArr: string[] };
};

function TaskAdd(props: ElemProps): JSX.Element {
  const { activeBoard, taskStatus } = props;
  const state = useContext(AppStateContext);
  // NOTE:  Extract data is running on every re-render, need to amend.
  const { columnList } = extractData(state, activeBoard);
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);
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
      statusArr: columnList,
      inputName: 'input-status',
    },
    'input-group-1': { ...genGroupInputs(INITIAL_SUBTASKS, 'subtask') },
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
    const formInputData = new FormData(e.target as HTMLFormElement);
    // Format data according to schema
    const {
      'input-title': name,
      'input-description': description,
      'input-status': status,
      ...rest
    } = Object.fromEntries(formInputData.entries());
    const newTask = {
      title: name,
      description,
      status,
      subtasks: Object.values(rest).map((c) => ({
        title: c,
        isCompleted: false,
      })),
    } as IPostTaskRequestDTO;

    const selectedColumn = activeBoard.columns.find(
      (c) => c.name === status
    ) as IColumn;
    const columnId = selectedColumn._id;

    // Send data to backend API
    try {
      const responseData: IBoard | undefined = await ApiService.postTask(
        activeBoard._id,
        columnId,
        newTask
      );
      if (!responseData) throw new Error('Could not post task!');

      modalDispatch({ type: 'close-modal' });
      return appDispatch({
        type: 'add-task',
        payload: responseData as unknown as IAppContextPayload,
      });
    } catch (error) {
      console.error(error);
      return modalDispatch({
        type: 'open-modal',
        modalType: 'error',
        modalProps: { title: activeBoard.name },
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
            name="input-status"
            currentListItem={formData['input-status'].value}
            listItems={formData['input-status'].statusArr}
            returnData={returnDataHandler}
          />
        </div>
        <button type="submit" className={styles.form__btnCreateTask}>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskAdd;
