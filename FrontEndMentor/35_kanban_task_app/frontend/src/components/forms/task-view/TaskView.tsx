import CheckBox from '#Components/custom/checkbox/CheckBox';
import Dropdown from '#Components/custom/dropdown/Dropdown';
import { AppStateContext } from '#Context/AppContext';
import IconVerticalEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import { StateContextType } from '#Types/types';
import { useContext, useEffect, useState } from 'react';
import styles from './_TaskView.module.scss';

type SubTaskObj = {
  title: string;
  isCompleted: boolean;
};

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
  if (!task || !columnList) throw new Error('No task was found in data!');
  return { task, columnList };
};

const computeTasksComplete = (subtasks: SubTaskObj[]): number => {
  return subtasks.filter((task: SubTaskObj) => task.isCompleted).length;
};

function TaskView(props: ElemProps): JSX.Element {
  const { selectTask } = props;
  const state = useContext(AppStateContext);
  const { task, columnList } = extractData(state, selectTask);
  const [tasksComplete, setTasksComplete] = useState(
    computeTasksComplete(task.subtasks)
  );
  // console.log('SELECTTASK', selectTask);
  // console.log('state', state);

  const subtasksElems = task.subtasks.map((t, i) => (
    // <div key={i} className={styles['sub-task']}>
    <CheckBox
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      title={t.title}
      checked={t.isCompleted}
      setTasksComplete={setTasksComplete}
    />
  ));

  console.log('RENDER');

  useEffect(() => {
    console.log('MOUNT', props);
    return () => {
      console.log('UNMOUNT');
    };
  });

  return (
    <div className={styles.container}>
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
            currentListItem={task.status}
            listItems={columnList}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskView;
