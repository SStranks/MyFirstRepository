import CheckBox from '#Components/custom/checkbox/CheckBox';
import Dropdown from '#Components/custom/dropdown/Dropdown';
import TaskEdit from '#Components/forms/task-edit/TaskEdit';
// import Modal from '#Components/modal/Modal';
import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import IconVerticalEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import { ReturnDataType, StateContextType } from '#Types/types';
import { updateInput, updateInputFromGroup } from '#Utils/formFunctions';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
// import TaskDelete from '../task-del/TaskDel';
import styles from './_TaskView.module.scss';

type SelectTaskType = { boardId: string; columnId: string; taskId: string };

type ElemProps = {
  selectTask: SelectTaskType;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const extractData = (state: StateContextType, selectTask: SelectTaskType) => {
  console.log('TASKVIEW ERR', state, selectTask);
  const board = state.boards.find((el) => el._id === selectTask.boardId);
  const columnList = board?.columns.map((el) => el.name);
  const column = board?.columns.find((el) => el._id === selectTask.columnId);
  const task = column?.tasks.find((el) => el._id === selectTask.taskId);
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
  const { selectTask, setIsModalOpen } = props;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  console.log('TASK VIEW', formData['input-status'].value);

  // Ensures that useEffect cleanup doesn't submit data back to App state if returnDataHandler is changing this components state.
  const isFormUpdating = useRef(false);

  useEffect(() => {
    // isFormUpdating.current = false;
    return () => {
      if (!isFormUpdating.current) {
        dispatch({
          type: 'update-task',
          payload: { id: selectTask, data: formData },
        });
      }
      // NOTE:  Does this still work? Changed to line above when working on task delete.
      // if (!isFormUpdating.current) console.log('test');
      // dispatch({
      //   type: 'update-task',
      //   payload: { id: selectTask, data: formData },
      // });
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

  const menuBtnClickHandler = () => {
    menuRef.current?.classList.toggle('hidden');
  };

  const menuClickCaptureHandler = (e: React.MouseEvent) => {
    const element = e.target as Element;
    console.log(element);
    if (element.innerHTML === 'Edit Task') {
      console.log('fired');
    }
    if (element.innerHTML === 'Delete Task') {
      isFormUpdating.current = true;
      setMenuOpen(true);
    }
  };

  const tasksComplete = Object.values(formData['input-group-subtasks']).filter(
    (t) => t.value
  ).length;

  // TODO:  Need to make keys unique here in case title is the same!
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

  // TODO:  Need to figure out task delete/task edit modals thing - this is currently hardcoded.
  return (
    <>
      {menuOpen && (
        <TaskEdit
          task={task}
          columnList={columnList}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {/* {menuOpen && (
        <TaskDelete id={selectTask} setIsModalOpen={setIsModalOpen} />
      )} */}
      <form className={styles.container} id="form-1">
        <div className={styles['task-view']}>
          <div className={styles['task-view__header']}>
            <p>{task.title}</p>
            <div className={styles['task-view__menu']}>
              <button type="button" onClick={menuBtnClickHandler}>
                <img src={IconVerticalEllipsis} alt="" />
              </button>
              <div
                className={`${styles['task-view__dropdown']} hidden`}
                ref={menuRef}
                onClickCapture={menuClickCaptureHandler}>
                <p>Edit Task</p>
                <p>Delete Task</p>
              </div>
            </div>
          </div>
          <p className={styles['task-view__description']}>{task.description}</p>
          <div>
            <p className={styles['task-view__sub-tasks-title']}>
              Subtasks ({tasksComplete} of {task.subtasks.length})
            </p>
            <div className={styles['task-view__sub-tasks']}>
              {subtasksElems}
            </div>
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
    </>
  );
}

export default TaskView;
