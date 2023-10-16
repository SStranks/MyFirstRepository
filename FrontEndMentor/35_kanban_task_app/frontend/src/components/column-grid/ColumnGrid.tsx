/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import ColumnEmpty from '#Components/column/ColumnEmpty';
import RootModalDispatchContext from '#Context/RootModalContext';
import { TBoard } from '#Types/types';
import { useContext } from 'react';

import styles from './_ColumnGrid.module.scss';

type ElemProps = {
  activeBoard: TBoard;
};

function ColumnGrid(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const modalDispatch = useContext(RootModalDispatchContext);

  // console.log('COLUMN GRID RENDER');

  const columns = activeBoard?.columns.map((el, i) => (
    <Column
      key={el._id}
      boardId={activeBoard._id}
      columnId={el._id}
      columnNum={i + 1}
      columnTitle={el.name}
      numOfTasks={el.tasks.length}
      tasks={el.tasks}
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
    <div className={styles.columnGrid} onClickCapture={onClickHandler}>
      {columns}
      {activeBoard && <ColumnEmpty activeBoard={activeBoard} />}
    </div>
  );
}

export default ColumnGrid;
