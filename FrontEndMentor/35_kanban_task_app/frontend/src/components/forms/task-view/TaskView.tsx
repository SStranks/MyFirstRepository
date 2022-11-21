import CheckBox from '#Components/custom/checkbox/CheckBox';
import Dropdown from '#Components/custom/dropdown/Dropdown';
import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import IconVerticalEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import { ReturnDataType, StateContextType } from '#Types/types';
import { updateInput, updateInputFromGroup } from '#Utils/formFunctions';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './_TaskView.module.scss';

type SelectTaskType = { boardId: string; columnId: string; taskId: string };

type ElemProps = {
  selectTask: SelectTaskType;
};

const extractData = (state: StateContextType, selectTask: SelectTaskType) => {
  const board = state.boards.find((el) => el.boardID === selectTask.boardId);
  const columnList = board?.columns.map((el) => el.name);
  const column = board?.columns.find(
    (el) => el.columnID === selectTask.columnId
  );
  const task = column?.tasks.find((el) => el.taskID === selectTask.taskId);
  if (!task || !columnList) throw new Error('Incongruence in data!');
  return { task, columnList };
};

type CheckboxType = {
  title: string;
  value: boolean;
  key: number;
  inputName: string;
  groupId: string;
};

type SubtaskType = {
  [key: string]: CheckboxType;
};

// TODO:  Need to refactor handling of generating inputs/checkboxes, as it is similar but different to group inputs on other forms (different properties; value vs title, isCompleted vs error, etc)
const genSubtaskInputs = (st: { title: string; isCompleted: boolean }[]) => {
  return st.reduce((acc, cur, i, arr) => {
    const key = `input-checkbox-${i - arr.length}`;
    acc[key] = {
      title: cur.title,
      value: cur.isCompleted,
      key: i - arr.length,
      inputName: `input-checkbox-${i - arr.length}`,
      groupId: 'input-group-subtasks',
    };
    return acc;
  }, {} as SubtaskType);
};

function TaskView(props: ElemProps): JSX.Element {
  const { selectTask } = props;
  const state = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
  const { task, columnList } = extractData(state, selectTask);
  const [formData, setFormData] = useState({
    'input-group-subtasks': { ...genSubtaskInputs(task.subtasks) },
    'input-status': {
      value: task.status,
      statusArr: columnList,
      inputName: 'input-status',
    },
  });

  console.log(formData['input-status'].value);

  // Ensures that useEffect cleanup doesn't submit data back to App state if returnDataHandler is changing this components state.
  const isFormUpdating = useRef(false);

  useEffect(() => {
    isFormUpdating.current = false;
    return () => {
      if (!isFormUpdating.current)
        dispatch({
          type: 'update-task',
          payload: { id: selectTask, data: formData },
        });
    };
  });

  const returnDataHandler = useCallback((data: ReturnDataType) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      isFormUpdating.current = true;
      setFormData((prev) => updateInputFromGroup(data, prev));
    } else {
      isFormUpdating.current = true;
      setFormData((prev) => updateInput(data, prev));
    }
  }, []);

  const tasksComplete = Object.values(formData['input-group-subtasks']).filter(
    (t) => t.value
  ).length;

  const subtasksElems = Object.values(formData['input-group-subtasks']).map(
    (t) => (
      <CheckBox
        key={t.title}
        title={t.title}
        checked={t.value}
        inputName={t.inputName}
        groupId={t.groupId}
        returnData={returnDataHandler}
      />
    )
  );

  return (
    <form className={styles.container} id="form-1">
      <div className={styles['task-view']}>
        <div className={styles['task-view__header']}>
          <p>{task.title}</p>
          <img src={IconVerticalEllipsis} alt="" />
        </div>
        <p className={styles['task-view__description']}>{task.description}</p>
        <div>
          <p className={styles['task-view__sub-tasks-title']}>
            Subtasks ({tasksComplete} of {task.subtasks.length})
          </p>
          <div className={styles['task-view__sub-tasks']}>{subtasksElems}</div>
        </div>
        <div className={styles['task-view__status']}>
          <p>Current Status</p>
          <Dropdown
            name="input-status"
            currentListItem={formData['input-status'].value}
            listItems={columnList}
            returnData={returnDataHandler}
          />
        </div>
      </div>
    </form>
  );
}

export default TaskView;
