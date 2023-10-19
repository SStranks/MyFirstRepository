/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import ColumnEmpty from '#Components/column/ColumnEmpty';
import RootModalDispatchContext from '#Context/RootModalContext';
import { TBoard } from '#Types/types';
import { useContext } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import { AppDispatchContext } from '#Context/AppContext';
import styles from './_ColumnGrid.module.scss';

type ElemProps = {
  activeBoard: TBoard | undefined;
};

function ColumnGrid(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);

  console.log('COLUMN GRID RENDER', activeBoard);

  const columns = activeBoard?.columns.map((el, i) => (
    <Droppable droppableId={`${i}`} key={el._id}>
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

  const onDragEndHandler = (result: DropResult) => {
    if (!activeBoard) return;
    if (!result.destination) return; // If dragged falls outside of droppable areas;
    console.log('DND', appDispatch);
    // const newBoard = { ...activeBoard };
    // // Extract task from source column
    // const [reorderedTask] = newBoard.columns[
    //   Number(result.source.droppableId)
    // ].tasks.splice(result.source.index, 1);
    // // Add task to destination column
    // newBoard.columns[Number(result.destination.droppableId)].tasks.splice(
    //   result.destination.index,
    //   0,
    //   reorderedTask
    // );

    // // Local store tasks order
    // const tasksIdOrder = activeBoard.columns.map((column) => {
    //   const tasks = column.tasks.map((task) => task._id);
    //   return { [column._id]: tasks };
    // });

    // localStorage.setItem(
    //   `board-${activeBoard._id}-taskOrder`,
    //   JSON.stringify(tasksIdOrder)
    // );

    // // Update local state
    // appDispatch({
    //   type: 'edit-board',
    //   payload: { id: { boardId: activeBoard._id }, data: newBoard },
    // });
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
