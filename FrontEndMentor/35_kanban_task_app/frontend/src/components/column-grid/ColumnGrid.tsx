/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import RootModalDispatchContext from '#Context/RootModalContext';
import { Board } from '#Types/types';
import { useContext, useState } from 'react';

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
  const modalDispatch = useContext(RootModalDispatchContext);
  const [selectTask, setSelectTask] = useState({
    boardId: '',
    columnId: '',
    taskId: '',
  });

  console.log('COLUMN GRID RENDER', boardData, setSelectTask, selectTask);

  const columns = boardData?.columns.map((el, i) => (
    <Column
      key={el._id}
      boardId={boardData._id}
      columnId={el._id}
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
      // if (taskId && columnId && boardData._id) {
      //   setSelectTask({ taskId, columnId, boardId: boardData._id });
      // }
      // DEBUG:  Selecttask is not updated before sending to modaldispatch (due to old code logic);
      const boardId = boardData._id;
      modalDispatch({
        type: 'open-modal',
        modalType: 'task-view',
        modalProps: { selectTask: { boardId, columnId, taskId } },
      });
    }
  };

  return (
    <div className={styles['column-grid']} onClickCapture={onClickHandler}>
      {columns}
      {boardData && newColumn}
    </div>
  );
}

export default ColumnGrid;
