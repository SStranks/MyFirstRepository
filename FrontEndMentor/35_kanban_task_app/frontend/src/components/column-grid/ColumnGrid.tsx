/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import RootModalDispatchContext from '#Context/RootModalContext';
import { Board } from '#Types/types';
import { useContext } from 'react';

import styles from './_ColumnGrid.module.scss';

const emptyColumn = (
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

type ElemProps = {
  boardData: Board;
};

function ColumnGrid(props: ElemProps): JSX.Element {
  const { boardData } = props;
  const modalDispatch = useContext(RootModalDispatchContext);

  console.log('COLUMN GRID RENDER');

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
      const { boardId, columnId, taskId } = (element as HTMLElement).dataset;
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
      {boardData && emptyColumn}
    </div>
  );
}

export default ColumnGrid;
