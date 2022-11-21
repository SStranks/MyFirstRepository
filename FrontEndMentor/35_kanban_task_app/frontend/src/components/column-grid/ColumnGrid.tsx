import Column from '#Components/column/Column';
import TaskView from '#Components/forms/task-view/TaskView';
import Modal from '#Components/modal/Modal';
import { Board } from '#Types/types';
import { useState } from 'react';

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

const newColumn = (
  <Column
    boardId=""
    columnId=""
    columnNum={0}
    columnTitle=""
    numOfTasks={0}
    tasks={[]}
    emptyCol
  />
);

function ColumnGrid(props: ElemProps): JSX.Element {
  const { boardData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectTask, setSelectTask] = useState({
    boardId: '',
    columnId: '',
    taskId: '',
  });
  // HACK:  Temporary Test Area: Modal Form Components Styling
  // const { title } = devDataJSON.boards[0].columns[1].tasks[5];
  // const { description } = devDataJSON.boards[0].columns[1].tasks[5];
  // const { subtasks } = devDataJSON.boards[0].columns[1].tasks[5];

  console.log('COLUMN GRID RENDER');

  const columns = boardData.columns.map((el, i) => (
    <Column
      // eslint-disable-next-line react/no-array-index-key
      key={el.columnID}
      boardId={boardData.boardID}
      columnId={el.columnID}
      columnNum={i + 1}
      columnTitle={el.name}
      numOfTasks={el.tasks.length}
      tasks={el.tasks}
      emptyCol={false}
    />
  ));

  const onClickHandler = (e: React.MouseEvent) => {
    const element = (e.target as HTMLElement).closest('[data-task-id]');
    if (element !== null) {
      const { columnId, taskId } = (element as HTMLElement).dataset;
      if (taskId && columnId && boardData.boardID) {
        setSelectTask({ taskId, columnId, boardId: boardData.boardID });
      }
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalContent={<TaskView selectTask={selectTask} />}
        />
      )}
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
