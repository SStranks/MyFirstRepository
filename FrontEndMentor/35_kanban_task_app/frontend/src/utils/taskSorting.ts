import { TAppStateContext, TTask } from '#Types/types';

export interface IOrderedTasks {
  _id: string;
  columns: { _id: string; tasks: string[] }[];
}

export const generateOrderedTasks = (
  state: TAppStateContext
): IOrderedTasks[] => {
  return state.boards.map((board) => {
    const columns = board.columns.map((column) => {
      const tasks = column.tasks.map((task) => task._id);
      return { _id: column._id, tasks };
    });
    return { _id: board._id, columns };
  });
};

export const orderStateTasks = (
  state: TAppStateContext,
  localStorageJSON: string
): TAppStateContext => {
  const newState = { ...state };
  const localStorage: IOrderedTasks[] = JSON.parse(localStorageJSON);
  let isDataSynchronized = true;
  const sortedBoards = newState.boards.map((stateBoard) => {
    const boardIndex = localStorage.findIndex(
      (el) => el._id === stateBoard._id
    );
    if (boardIndex === -1) {
      isDataSynchronized = false;
      return stateBoard;
    }

    const sortedColumns = stateBoard.columns.map((stateColumn) => {
      const columnIndex = localStorage[boardIndex].columns.findIndex(
        (localCol) => localCol._id === stateColumn._id
      );
      if (columnIndex === -1) {
        isDataSynchronized = false;
        return stateColumn;
      }

      const sortedTasks: TTask[] = [];
      const sortedTaskIds = new Set();

      // NOTE:  Could optimize this portion by converting state tasks into hashmap first, deleting sorted tasks from it, then merging the remainder at the end.
      localStorage[boardIndex].columns[columnIndex].tasks.forEach(
        (localStorageTaskId) => {
          const taskIndex = stateColumn.tasks.findIndex(
            (stateTask) => stateTask._id === localStorageTaskId
          );
          if (taskIndex !== -1) {
            sortedTasks.push(stateColumn.tasks[taskIndex]);
            sortedTaskIds.add(stateColumn.tasks[taskIndex]._id);
          } else {
            isDataSynchronized = false;
          }
        }
      );

      const missingTasks = stateColumn.tasks.filter(
        (stateTask) => !sortedTaskIds.has(stateTask._id)
      );
      if (missingTasks.length > 0) isDataSynchronized = false;

      return { ...stateColumn, tasks: [...sortedTasks, ...missingTasks] };
    });
    return { ...stateBoard, columns: sortedColumns };
  });

  // If boards or tasks are not synchronised, recreate localStorage
  if (!isDataSynchronized) newState.localStoragePending = true;

  return { ...newState, boards: sortedBoards };
};

// create: export saveToLocalStorage;
