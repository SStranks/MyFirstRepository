/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import ColumnEmpty from '#Components/column/ColumnEmpty';
import RootModalDispatchContext from '#Context/RootModalContext';
import { TBoard } from '#Types/types';
import { useContext } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import styles from './_ColumnGrid.module.scss';

type ElemProps = {
  activeBoard: TBoard;
};

// TODO:  Need to figure out how to integrate both DnD and click handler for individual task modal.
function ColumnGrid(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const modalDispatch = useContext(RootModalDispatchContext);

  // console.log('COLUMN GRID RENDER');

  const columns = activeBoard?.columns.map((el, i) => (
    <Droppable droppableId={el._id} key={el._id}>
      {(provided, snapshot) => (
        <Column
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.droppableProps}
          dndProvided={provided}
          dndSnapshot={snapshot}
          boardId={activeBoard._id}
          columnId={el._id}
          columnNum={i + 1}
          columnTitle={el.name}
          numOfTasks={el.tasks.length}
          tasks={el.tasks}
        />
      )}
    </Droppable>
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

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) console.log('OUTSIDE');
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div className={styles.columnGrid} onClickCapture={onClickHandler}>
        {columns}
        {activeBoard && <ColumnEmpty activeBoard={activeBoard} />}
      </div>
    </DragDropContext>
  );
}

export default ColumnGrid;
