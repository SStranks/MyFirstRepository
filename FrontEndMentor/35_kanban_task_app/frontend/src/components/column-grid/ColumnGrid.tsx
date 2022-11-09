import Column from '#Components/column/Column';

// NOTE:  Temporary Dev: Testing out forms
import TaskView from '#Components/forms/task-view/TaskView';

// TEMP DEV:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';
import styles from './_ColumnGrid.module.scss';

function ColumnGrid(): JSX.Element {
  // HACK:  Temporary Test Area: Modal Form Components Styling
  const { title } = devDataJSON.boards[0].columns[1].tasks[5];
  const { description } = devDataJSON.boards[0].columns[1].tasks[5];
  const { subtasks } = devDataJSON.boards[0].columns[1].tasks[5];

  // TEMP DEV:  Temporary Dev: Development Data JSON
  const columns = devDataJSON.boards[0].columns.map((el, i) => (
    // NOTE:  Need to configure unique key - intend to implement drag and drop reordering feature here.
    <Column
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      columnNum={i + 1}
      columnTitle={el.name}
      numOfTasks={el.tasks.length}
      tasks={el.tasks}
      emptyCol={false}
    />
  ));

  const newColumn = (
    <Column columnNum={0} columnTitle="" numOfTasks={0} tasks={[]} emptyCol />
  );

  return (
    <>
      <TaskView
        title={title}
        description={description}
        numTaskComplete={1}
        numTaskTotal={3}
        subTasks={subtasks}
      />
      <div className={styles['column-grid']}>
        {columns}
        {newColumn}
      </div>
    </>
  );
}

export default ColumnGrid;
