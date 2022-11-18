import Column from '#Components/column/Column';
import { Board } from '#Types/types';

// NOTE:  Temporary Dev: Testing out forms
// import TaskView from '#Components/forms/task-view/TaskView';
// import TaskAdd from '#Components/forms/task-add/TaskAdd';
// import TaskEdit from '#Components/forms/task-edit/TaskEdit';
// import BoardAdd from '#Components/forms/board-add/BoardAdd';
// import BoardEdit from '#Components/forms/board-edit/BoardEdit';
// import BoardDelete from '#Components/forms/board-del/BoardDel';
// import TaskDelete from '#Components/forms/task-del/TaskDel';

import styles from './_ColumnGrid.module.scss';

type ElemProps = {
  boardData: Board;
};

function ColumnGrid(props: ElemProps): JSX.Element {
  const { boardData } = props;
  // HACK:  Temporary Test Area: Modal Form Components Styling
  // const { title } = devDataJSON.boards[0].columns[1].tasks[5];
  // const { description } = devDataJSON.boards[0].columns[1].tasks[5];
  // const { subtasks } = devDataJSON.boards[0].columns[1].tasks[5];

  // TEMP DEV:  Temporary Dev: Development Data JSON
  const columns = boardData.columns.map((el, i) => (
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

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onClickHandler = (e: React.MouseEvent) => {
    const element = (e.target as Element).closest('[data-id]');
    if (element !== null) {
      // TODO:  Found card/task; access appropriate data (local storage?) and render in modal (task view)
      console.log(element);
    }
  };

  return (
    <>
      {/* // TEMP DEV:  Working on styles */}
      {/* <TaskDelete /> */}
      {/* <BoardDelete /> */}
      {/* <BoardEdit
        boardName="Platform Launch"
        boardColumns={['Todo', 'Doing', 'Done']}
      /> */}
      {/* <BoardAdd /> */}
      {/* <TaskAdd
        taskStatus={{ current: 'Doing', statusArr: ['Todo', 'Doing', 'Done'] }}
      /> */}
      {/* <TaskEdit
        taskTitle="Add authentication endpoints"
        taskDescription=""
        taskSubtasks={['Define user model', 'Add auth endpoints']}
        taskStatus={{ current: 'Doing', statusArr: ['Todo', 'Doing', 'Done'] }}
      /> */}
      {/* <TaskView
        title={title}
        description={description}
        numTaskComplete={1}
        numTaskTotal={3}
        subTasks={subtasks}
      /> */}
      <div className={styles['column-grid']} onClickCapture={onClickHandler}>
        {columns}
        {newColumn}
      </div>
    </>
  );
}

export default ColumnGrid;
