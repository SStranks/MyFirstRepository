import Column from '#Components/column/Column';

// NOTE:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';
import styles from './_ColumnGrid.module.scss';

function ColumnGrid(): JSX.Element {
  // NOTE:  Temporary Dev: Development Data JSON
  const columns = devDataJSON.boards[0].columns.map((el, i) => (
    // NOTE:  Need to configure unique key - intend to implement drag and drop reordering feature here.
    <Column
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      columnTitle={el.name}
      numOfTasks={el.tasks.length}
      tasks={el.tasks}
      emptyCol={false}
    />
  ));

  const newColumn = (
    <Column columnTitle="" numOfTasks={0} tasks={[]} emptyCol />
  );

  return (
    <div className={styles['column-grid']}>
      {columns}
      {newColumn}
    </div>
  );
}

export default ColumnGrid;
