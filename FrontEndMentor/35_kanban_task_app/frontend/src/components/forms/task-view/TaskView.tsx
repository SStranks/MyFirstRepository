import {
  IPatchTaskColumnRequestDTO,
  IPostTaskRequestDTO,
} from '#Services/ApiRequestDto';
import CheckBox from '#Components/custom/checkbox/CheckBox';
import Dropdown from '#Components/custom/dropdown/Dropdown';
import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import ApiService from '#Services/Services';
import IconVerticalEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import { TAppStateContext, TReturnData, TSelectTask } from '#Types/types';
import type { ITask } from '#Shared/types';
import { updateInput, updateInputFromGroup } from '#Utils/formFunctions';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './_TaskView.module.scss';

const extractData = (state: TAppStateContext, selectTask: TSelectTask) => {
  console.log('TASKVIEW EXTRACT DATA');
  const board = state.boards.find((el) => el._id === selectTask.boardId);
  // NOTE:  el.name, el._id
  const columnList = board?.columns.map((el) => [el.name, el._id]);
  const column = board?.columns.find((el) => el._id === selectTask.columnId);
  const task = column?.tasks.find((el) => el._id === selectTask.taskId);
  if (!task || !columnList) throw new Error('Incongruence in data!');
  return { task, columnList };
};

type CheckboxType = {
  _id: string;
  title: string;
  value: boolean;
  key: string;
  inputName: string;
  groupId: string;
};

type SubtaskType = {
  [key: string]: CheckboxType;
};

// TODO:  Need to refactor handling of generating inputs/checkboxes, as it is similar but different to group inputs on other forms (different properties; value vs title, isCompleted vs error, etc)
const genSubtaskInputs = (task: ITask): SubtaskType => {
  console.log('GEN SUB TASK', task);
  return task.subtasks.reduce((acc, cur) => {
    const key = `input-checkbox-${cur._id}`;
    acc[key] = {
      _id: cur._id,
      title: cur.title,
      value: cur.isCompleted,
      key,
      inputName: `input-checkbox-${cur._id}`,
      groupId: 'input-group-subtasks',
    };
    return acc;
  }, {} as SubtaskType);
};

type TProps = {
  selectTask: TSelectTask;
};

function TaskView(props: TProps): JSX.Element {
  const { selectTask } = props;
  const state = useContext(AppStateContext);
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);
  // NOTE:  Extract data is running on every re-render, need to amend.
  const { task, columnList } = extractData(state, selectTask);
  const [formData, setFormData] = useState({
    'input-group-subtasks': { ...genSubtaskInputs(task) },
    'input-status': {
      value: task.status,
      columnId: selectTask.columnId,
      statusArr: columnList,
      inputName: 'input-status',
    },
  });
  const menuRef = useRef<HTMLDivElement>(null);

  // Ensures that useEffect cleanup doesn't submit data back to App state if returnDataHandler is changing this components state.
  const isFormUpdating = useRef<boolean>(false);
  const origTaskColumnId = selectTask.columnId;

  useEffect(() => {
    isFormUpdating.current = false;
    console.log('TASKVIEW EFFECT');
    return () => {
      console.log('TASKVIEW EFFECT CLEANUP');
      if (!isFormUpdating.current) {
        console.log('TASKVIEW DISPATCH', selectTask, formData);
        const updateTask = async () => {
          try {
            const newTask = {
              status: formData['input-status'].value,
              subtasks: Object.values(formData['input-group-subtasks']).map(
                (t) => ({
                  title: t.title,
                  isCompleted: t.value,
                })
              ),
            } as IPostTaskRequestDTO;
            const { boardId, columnId, taskId } = selectTask;

            const responseData = await ApiService.patchTask(
              boardId,
              columnId,
              taskId,
              newTask
            );
            if (!responseData) throw new Error('Could not patch task!');

            return appDispatch({
              type: 'update-task',
              payload: {
                id: { boardId },
                data: { board: responseData },
              },
            });
          } catch (error) {
            console.error(error);
            return modalDispatch({
              type: 'open-modal',
              modalType: 'error',
              modalProps: { title: task.title },
            });
          }
        };
        const updateTaskColumn = async () => {
          try {
            const newTask = {
              title: task.title,
              description: task.description,
              status: formData['input-status'].value,
              subtasks: Object.values(formData['input-group-subtasks']).map(
                (t) => ({
                  title: t.title,
                  isCompleted: t.value,
                })
              ),
            };
            const { boardId, columnId, taskId } = selectTask;
            const newColumnId = formData['input-status'].columnId;
            const data = {
              taskId,
              newColumnId,
              newTask,
            } as IPatchTaskColumnRequestDTO;
            const responseData = await ApiService.patchTaskColumn(
              boardId,
              columnId,
              data
            );
            if (!responseData) throw new Error('Could not patch task column!');

            return appDispatch({
              type: 'update-task',
              payload: { id: { boardId }, data: { board: responseData } },
            });
          } catch (error) {
            console.error(error);
            return modalDispatch({
              type: 'open-modal',
              modalType: 'error',
              modalProps: { title: task.title },
            });
          }
        };
        if (origTaskColumnId === formData['input-status'].columnId) {
          updateTask();
        } else {
          updateTaskColumn();
        }
      }
    };
  });

  const returnDataHandler = useCallback((data: TReturnData) => {
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
    if (element.innerHTML === 'Edit Task') {
      menuRef.current?.classList.add('hidden');
      isFormUpdating.current = true;
      modalDispatch({
        type: 'open-modal',
        modalType: 'task-edit',
        modalProps: { task, selectTask, columnList },
      });
    }
    if (element.innerHTML === 'Delete Task') {
      menuRef.current?.classList.add('hidden');
      isFormUpdating.current = true;
      modalDispatch({
        type: 'open-modal',
        modalType: 'task-delete',
        modalProps: { id: selectTask },
      });
    }
  };

  const tasksComplete = Object.values(formData['input-group-subtasks']).filter(
    (t) => t.value
  ).length;

  const subtasksElems = Object.values(formData['input-group-subtasks']).map(
    (t) => (
      <CheckBox
        key={t._id}
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
      <div className={styles.taskView}>
        <div className={styles.taskView__header}>
          <p>{task.title}</p>
          <div className={styles.taskView__menu}>
            <button
              type="button"
              className={styles.taskView__menu__btn}
              onClick={menuBtnClickHandler}>
              <img src={IconVerticalEllipsis} alt="" />
            </button>
            <div
              className={`${styles.taskView__dropdown} hidden`}
              ref={menuRef}
              onClickCapture={menuClickCaptureHandler}>
              <p>Edit Task</p>
              <p>Delete Task</p>
            </div>
          </div>
        </div>
        <p className={styles.taskView__description}>{task.description}</p>
        <div>
          <p className={styles.taskView__subTasksTitle}>
            Subtasks ({tasksComplete} of {task.subtasks.length})
          </p>
          <div className={styles.taskView__subTasks}>{subtasksElems}</div>
        </div>
        <div className={styles.taskView__status}>
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
