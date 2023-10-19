import { TAppStateContext, TTask } from '#Types/types';

interface IOrderedTasks {
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
    console.log(isDataSynchronized);
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
    // console.log(isDataSynchronized);
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

// export const orderStateTasks = (
//   state: TAppStateContext,
//   localStorage: IOrderedTasks[]
// ): TAppStateContext => {
//   const newState = { ...state };
//   // Get board Ids for comparison
//   const localStorageBoardIds = new Set(localStorage.map((board) => board._id));
//   const stateBoardIdsArray = newState.boards.map((board) => board._id);
//   const stateBoardIdsSet = new Set(stateBoardIdsArray);
//   // Iterate localStorage boards and map in full data from state boards
//   let dataIsSynchronised = true;
//   const sortedBoards = localStorage.reduce((accBoard, curBoard) => {
//     const boardIndex = stateBoardIdsArray.indexOf(curBoard._id);
//     if (boardIndex === -1) {
//       // localStorage board does not exist in API data; discard local board
//       dataIsSynchronised = false;
//       return accBoard;
//     }
//     // Sort columns
//     const stateBoardColumnIds = newState.boards[boardIndex].columns.map((el) => el._id);
//     const sortedColumns = curBoard.columns.reduce((accColumn, curColumn) => {
//       const columnIndex = stateBoardColumnIds.indexOf(curColumn._id);
//       if (columnIndex === -1) {
//         dataIsSynchronised = false;
//         return accColumn;
//       }

//       return accColumn;
//     }, [] as IColumn[]);

//     // Check for any addition state columns not accounted for by sortColumns
//     const missingColumns =

//     // Return data
//     const { _id, name } = newState.boards[boardIndex];
//     const sortedBoard = { _id, name, columns: sortedColumns };
//     accBoard.push(sortedBoard);
//     return accBoard;
//   }, [] as IBoard[]);

//   // Check for any additional state boards not accounted for by sortedBoards
//   let missingBoards: TBoard[] = [];
//   if (localStorageBoardIds.size !== stateBoardIdsSet.size) {
//     const missingBoardsIds = new Set(
//       stateBoardIdsArray.filter((boardId) => !localStorageBoardIds.has(boardId))
//     );
//     if (missingBoardsIds.size > 0) {
//       missingBoards = newState.boards.filter((board) =>
//         missingBoardsIds.has(board._id)
//       );
//     }
//   }

//   // If boards or tasks are not synchronised, recreate localStorage
//   if (!dataIsSynchronised || missingBoards.length > 0) {
//     // NOTE:  Rename newstate
//     const newState22222 = { boards: [...sortedBoards, ...missingBoards] };
//     const newOrderedTasks = generateOrderedTasks(newState22222);
//     const JSONString = JSON.stringify(newOrderedTasks);
//     window.localStorage.setItem('boards-taskOrder', JSONString);
//   }

//   // Return amended state
//   return { boards: [...sortedBoards, ...missingBoards] };
// };

// create: export saveToLocalStorage;
