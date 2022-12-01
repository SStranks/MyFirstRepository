/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import TaskView from '#Components/forms/task-view/TaskView';
import Modal from '#Components/modal/Modal';
import { Board } from '#Types/types';
import { useState } from 'react';

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

  console.log('COLUMN GRID RENDER', boardData);

  const columns = boardData.columns.map((el, i) => (
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
      if (taskId && columnId && boardData._id) {
        setSelectTask({ taskId, columnId, boardId: boardData._id });
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
          modalContent={
            <TaskView selectTask={selectTask} setIsModalOpen={setIsModalOpen} />
          }
        />
      )}
      <div className={styles['column-grid']} onClickCapture={onClickHandler}>
        {columns}
        {newColumn}
      </div>
    </>
  );
}

export default ColumnGrid;
