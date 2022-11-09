import CheckBox from '#Components/custom/checkbox/CheckBox';
import IconVerticalEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import { useState } from 'react';
import styles from './_TaskView.module.scss';

type SubTaskObj = {
  title: string;
  isCompleted: boolean;
};

type ElemProps = {
  title: string;
  description: string;
  numTaskComplete: number;
  numTaskTotal: number;
  subTasks: SubTaskObj[];
};

function TaskView(props: ElemProps): JSX.Element {
  const { title, description, numTaskComplete, numTaskTotal, subTasks } = props;
  const [tasksComplete, setTasksComplete] = useState(numTaskComplete);

  const subTasksElems = subTasks.map((task, i) => (
    // <div key={i} className={styles['sub-task']}>
    <CheckBox
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      title={task.title}
      checked={task.isCompleted}
      setTasksComplete={setTasksComplete}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles['task-view']}>
        <div className={styles['task-view__header']}>
          <p>{title}</p>
          <img src={IconVerticalEllipsis} alt="" />
        </div>
        <p className={styles['task-view__description']}>{description}</p>
        <div>
          <p className={styles['task-view__sub-tasks-title']}>
            Subtasks ({tasksComplete} of {numTaskTotal})
          </p>
          <div className={styles['task-view__sub-tasks']}>{subTasksElems}</div>
        </div>
        <div className={styles['task-view__status']}>
          <p>Current Status</p>
          {/* INSERT DROPDOWN COMPONENT  */}
        </div>
      </div>
    </div>
  );
}

export default TaskView;
