import Task from '#Components/task/Task';
import ColumnEmpty from './ColumnEmpty';
import styles from './_Column.module.scss';

type SubtaskObj = {
  title: string;
  isCompleted: boolean;
};

type ElemProps = {
  columnNum: number;
  columnTitle: string;
  numOfTasks: number;
  tasks:
    | {
        title: string;
        description: string;
        status: string;
        subtasks: SubtaskObj[] | [];
      }[]
    | [];
  emptyCol: boolean;
};

function Column(props: ElemProps): JSX.Element {
  const { columnNum, columnTitle, numOfTasks, tasks, emptyCol } = props;

  // NOTE:  Temporary Dev: For empty task column. Invoke global class 'invisible'.
  // const emptyCol = false;

  const tasksCards = tasks.map((el, i) => {
    const completedSubTasks = el.subtasks.filter(
      (obj: SubtaskObj) => obj.isCompleted === true
    ).length;
    return (
      <Task
        // NOTE:  Need to configure unique key - intend to implement drag and drop reordering feature here.
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        title={el.title}
        numOfSubTasks={el.subtasks.length}
        subTasksNumComplete={completedSubTasks}
      />
    );
  });

  return (
    <div className={styles.column}>
      <div className={`${styles.status} ${emptyCol ? 'invisible' : ''}`}>
        <div
          className={`${styles.status__bullet} ${
            styles[`status__bullet--${columnNum}`]
          }`}
        />
        <p className={styles.status__title}>
          {columnTitle} ({numOfTasks})
        </p>
      </div>
      {!emptyCol && tasksCards}
      {emptyCol && <ColumnEmpty />}
    </div>
  );
}

export default Column;
