/* eslint-disable no-underscore-dangle */
import Column from '#Components/column/Column';
import ColumnEmpty from '#Components/column/ColumnEmpty';
import RootModalDispatchContext from '#Context/RootModalContext';
import { TBoard } from '#Types/types';
import { useContext } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import { AppDispatchContext } from '#Context/AppContext';
import ApiService from '#Services/Services';
// import { IOrderedTasks } from '#Utils/taskSorting';
import styles from './_ColumnGrid.module.scss';

type ElemProps = {
  activeBoard: TBoard | undefined;
};

function ColumnGrid(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);

  // console.log('COLUMN GRID RENDER', activeBoard);

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

  const onDragEndHandler = async (result: DropResult) => {
    if (!activeBoard) return;
    if (!result.destination) return; // If dragged falls outside of droppable areas;
    const board = { ...activeBoard };
    const { _id: boardId } = board;
    const fromColumnId = board.columns[Number(result.source.droppableId)]._id;
    const toColumnId =
      board.columns[Number(result.destination.droppableId)]._id;

    // Adjust the task position within the board data structure
    const [reorderedTask] = board.columns[
      Number(result.source.droppableId)
    ].tasks.splice(result.source.index, 1);
    // Add task to destination column
    board.columns[Number(result.destination.droppableId)].tasks.splice(
      result.destination.index,
      0,
      reorderedTask
    );

    // If task is being moved to another column, update API
    if (fromColumnId !== toColumnId) {
      try {
        const { _id, ...rest } = reorderedTask;
        const newTask = { ...rest, _id };
        const data = {
          taskId: _id,
          newColumnId: toColumnId,
          newTask,
        };

        const responseData = await ApiService.patchTaskColumn(
          boardId,
          fromColumnId,
          data
        );
        if (!responseData) throw new Error('Could not commit change!');
      } catch (error) {
        console.log(error);
        // Reverse the task column move
        const [reverseTask] = board.columns[
          Number(result.destination.droppableId)
        ].tasks.splice(result.destination.index, 1);
        board.columns[Number(result.source.droppableId)].tasks.splice(
          result.source.index,
          0,
          reverseTask
        );
      }
    }

    appDispatch({
      type: 'update-task',
      payload: { id: { boardId }, data: { board } },
    });
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
