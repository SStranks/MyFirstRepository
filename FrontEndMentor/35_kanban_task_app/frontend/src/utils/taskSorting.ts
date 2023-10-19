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
  localStorage: IOrderedTasks[]
): TAppStateContext => {
  const newState = { ...state };
  let isDataSynchronized = true;
  const sortedBoards = newState.boards.map((board) => {
    const boardIndex = localStorage.findIndex((el) => el._id === board._id);
    if (boardIndex === -1) {
      isDataSynchronized = false;
      return board;
    }

    const sortedColumns = board.columns.map((column) => {
      const columnIndex = localStorage[boardIndex].columns.findIndex(
        (localCol) => localCol._id === column._id
      );
      if (columnIndex === -1) {
        isDataSynchronized = false;
        return column;
      }

      const sortedTasks: TTask[] = [];
      const sortedTaskIds = new Set();

      // NOTE:  Could optimize this portion by converting state tasks into hashmap first, deleting sorted tasks from it, then merging the remainder at the end.
      newState.boards[boardIndex].columns[columnIndex].tasks.forEach(
        (localTask) => {
          const taskIndex = column.tasks.findIndex(
            (apiTask) => apiTask._id === localTask._id
          );
          if (taskIndex !== -1) {
            sortedTasks.push(column.tasks[taskIndex]);
            sortedTaskIds.add(column.tasks[taskIndex]._id);
          } else {
            isDataSynchronized = false;
          }
        }
      );

      const missingTasks = column.tasks.filter(
        (apiTask) => !sortedTaskIds.has(apiTask._id)
      );
      if (missingTasks.length > 0) isDataSynchronized = false;

      return { ...column, tasks: [...sortedTasks, ...missingTasks] };
    });
    return { ...board, columns: sortedColumns };
  });

  // If boards or tasks are not synchronised, recreate localStorage
  if (!isDataSynchronized) {
    const newOrderedTasks = generateOrderedTasks(newState);
    const JSONString = JSON.stringify(newOrderedTasks);
    window.localStorage.setItem('boards-taskOrder', JSONString);
  }

  return { boards: sortedBoards };
};

// create: export saveToLocalStorage;
