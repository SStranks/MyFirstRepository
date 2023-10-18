/* eslint-disable no-underscore-dangle */
import { TAppContextAction, TAppContextPayload } from '#Context/AppContext';
import { TAppStateContext, TBoard } from '#Types/types';
import { useCallback, useReducer } from 'react';

const setInitialState = (payload: TAppContextPayload) => {
  // const data = { boards: payload.data.data } as TAppStateContext;

  // DEBUG:  useLocalStorage hook?
  // Initialize users tasks custom ordering
  // const boards = data.boards.map((board) => {
  //   const tasksIdOrder: Record<string, string[]>[] = JSON.parse(
  //     localStorage.getItem(`board-${board._id}-taskOrder`) || '[]'
  //   );

  //   // If localStorage null then set
  //   if (tasksIdOrder.length === 0 && board.columns.length > 0) {
  //     console.log('NONE');
  //     const tasksIdOrderArray = board.columns.map((column) => {
  //       const tasks = column.tasks.map((task) => task._id);
  //       return { [column._id]: tasks };
  //     });

  //     localStorage.setItem(
  //       `board-${board._id}-taskOrder`,
  //       JSON.stringify(tasksIdOrderArray)
  //     );
  //   }

  //   // If localStorage present then order tasks in data to match.
  //   const newBoard = { ...board };
  //   if (tasksIdOrder.length > 0 && board.columns.length > 0) {
  //     const columnIds = tasksIdOrder.map(
  //       (column: object) => Object.keys(column)[0]
  //     );
  //     const allTasks = board.columns.reduce((acc, column) => {
  //       return [...acc, ...column.tasks];
  //     }, [] as TTask[]);

  //     newBoard.columns = board.columns.map((column) => {
  //       const index = columnIds.indexOf(column._id);
  //       if (index === -1) return column;
  //       const tasksOrderedIds = Object.values(tasksIdOrder[index])[0];

  //       const tasksOrdered = tasksOrderedIds.map((task) => {
  //         return allTasks.find((el) => el._id === task);
  //       });

  //       const newTasks = column.tasks.filter((el) => {
  //         return !tasksOrderedIds.includes(el._id);
  //       });

  //       if (board._id === '6485dadd35e26f7c01a5787e') {
  //         console.log('C', tasksOrdered, newTasks);
  //       }

  //       const tasks = [...tasksOrdered, ...newTasks];
  //       if (board._id === '6485dadd35e26f7c01a5787e') {
  //         // console.log('TASK ORDER1', tasksOrderedIds);
  //         // console.log('TASK ORDER2', tasksOrdered);
  //         // console.log('TASK ORDER3', newTasks);
  //         // console.log('TASK ORDER4', tasks);
  //         // console.log('TASK ORDER5', { ...column, tasks });
  //       }
  //       return { ...column, tasks } as TColumn;
  //     });
  //   }

  //   if (board._id === '6485dadd35e26f7c01a5787e') console.log('NB', newBoard);
  //   return newBoard || board;
  // });

  // return { boards } as TAppStateContext;
  const data: unknown = payload;
  const newState = { boards: data };
  return newState as TAppStateContext;
};

const addTask = (state: TAppStateContext, payload: TAppContextPayload) => {
  const newState = state;
  const newBoard = payload.data.data as TBoard;
  const board = newState.boards.findIndex((b) => b._id === newBoard._id);
  newState.boards[board] = newBoard;
  return { ...newState };
};

const updateTask = (state: TAppStateContext, payload: TAppContextPayload) => {
  const newState = state;
  const { boardId } = payload.id;
  const boardIdx = newState.boards.findIndex((b) => b._id === boardId);
  newState.boards[boardIdx] = payload.data.board as TBoard;
  return { ...newState };
};

// REFACTOR:  This is updating entire board state. Refactor.
const editTask = (state: TAppStateContext, payload: TAppContextPayload) => {
  const newState = state;
  const { boardId } = payload.id;
  const boardIdx = newState.boards.findIndex((b) => b._id === boardId);
  newState.boards[boardIdx] = payload.data as TBoard;
  return { ...newState };
};

const deleteTask = (state: TAppStateContext, payload: TAppContextPayload) => {
  const newState = state;
  const { boardId, columnId, taskId } = payload.id;
  const boardIdx = newState.boards.findIndex((b) => b._id === boardId);
  const columnIdx = newState.boards[boardIdx].columns.findIndex(
    (c) => c._id === columnId
  );
  const newTasks = newState.boards[boardIdx].columns[columnIdx].tasks.filter(
    (t) => t._id !== taskId
  );
  newState.boards[boardIdx].columns[columnIdx].tasks = newTasks;
  return { ...newState };
};

const addBoard = (state: TAppStateContext, payload: TAppContextPayload) => {
  console.log('ADDBOARD REDUCER', state, payload);
  const newBoard = payload as unknown;
  const newState = { boards: [...state.boards, newBoard as TBoard] };
  return newState;
};

const editBoard = (state: TAppStateContext, payload: TAppContextPayload) => {
  console.log('PAYLOAD', payload);
  const newState = state;
  const boardIdx = newState.boards.findIndex(
    (b) => b._id === payload.id.boardId
  );
  newState.boards[boardIdx] = payload.data as TBoard;
  return { ...newState };
};

const deleteBoard = (state: TAppStateContext, payload: TAppContextPayload) => {
  const filterBoards = state.boards.filter((b) => b._id !== payload.id.boardId);
  const newState = { boards: filterBoards };
  return newState;
};

const ACTIONS = {
  SETINITIALSTATE: 'set-initial',
  ADDTASK: 'add-task',
  UPDATETASK: 'update-task',
  EDITTASK: 'edit-task',
  DELETETASK: 'delete-task',
  ADDBOARD: 'add-board',
  EDITBOARD: 'edit-board',
  DELETEBOARD: 'delete-board',
};

const reducer = (
  state: TAppStateContext,
  action: TAppContextAction
): TAppStateContext => {
  switch (action.type) {
    case ACTIONS.SETINITIALSTATE: {
      return setInitialState(action.payload);
    }
    case ACTIONS.ADDTASK: {
      return addTask(state, action.payload);
    }
    case ACTIONS.UPDATETASK: {
      return updateTask(state, action.payload);
    }
    case ACTIONS.EDITTASK: {
      return editTask(state, action.payload);
    }
    case ACTIONS.DELETETASK: {
      return deleteTask(state, action.payload);
    }
    case ACTIONS.ADDBOARD: {
      return addBoard(state, action.payload);
    }
    case ACTIONS.EDITBOARD: {
      return editBoard(state, action.payload);
    }
    case ACTIONS.DELETEBOARD: {
      return deleteBoard(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function useAppReducer(
  initialState: TAppStateContext
): [TAppStateContext, React.Dispatch<TAppContextAction>] {
  const [state, unstableDispatch] = useReducer(reducer, initialState);
  const dispatch = useCallback(unstableDispatch, [unstableDispatch]);
  return [state, dispatch];
}

export default useAppReducer;
