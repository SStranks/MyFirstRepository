import { IAppContextPayload, TAppContextAction } from '#Context/AppContext';
import { TAppStateContext, TBoard } from '#Types/types';
import { orderStateTasks } from '#Utils/taskSorting';
import { useCallback, useReducer } from 'react';

const setLocalStoragePending = (
  state: TAppStateContext,
  localStoragePending: boolean
) => {
  return { ...state, localStoragePending };
};

const setInitialState = (
  state: TAppStateContext,
  payload: IAppContextPayload
) => {
  const data: unknown = payload;
  let newState = { ...state, boards: data as TBoard[] };

  // Synchronise API data with localStorage ordering of tasks
  const localStorageTaskOrderJSON =
    window.localStorage.getItem('boards-taskOrder');
  if (localStorageTaskOrderJSON !== null) {
    const localStorageTaskOrder = JSON.parse(localStorageTaskOrderJSON);
    newState = orderStateTasks(newState, localStorageTaskOrder);
  } else {
    newState = setLocalStoragePending(newState, true);
    // console.log(123);
    // newState = generateOrderedTasks(newState);
    // const newOrderedTasks = generateOrderedTasks(newState);
    // console.log(newOrderedTasks);
    // const JSONData = JSON.stringify(newOrderedTasks);
    // window.localStorage.setItem('boards-taskOrder', JSONData);
  }
  return newState;
};

const addTask = (state: TAppStateContext, payload: IAppContextPayload) => {
  const newState = state;
  const newBoard = payload as unknown as TBoard;
  const board = newState.boards.findIndex((b) => b._id === newBoard._id);
  newState.boards[board] = newBoard;
  return { ...newState };
};

const updateTask = (state: TAppStateContext, payload: IAppContextPayload) => {
  console.log('UPDATE TASK REDUCER');
  const newState = { ...state };
  const boardId = payload.id?.boardId;
  const boardIdx = newState.boards.findIndex((b) => b._id === boardId);
  newState.boards[boardIdx] = payload.data?.board as TBoard;
  return newState;
};

const deleteTask = (state: TAppStateContext, payload: IAppContextPayload) => {
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

const addBoard = (state: TAppStateContext, payload: IAppContextPayload) => {
  console.log('ADDBOARD REDUCER', state, payload);
  const newBoard = payload as unknown;
  const newState = { ...state, boards: [...state.boards, newBoard as TBoard] };
  return newState;
};

const editBoard = (state: TAppStateContext, payload: IAppContextPayload) => {
  console.log('PAYLOAD', payload);
  const newState = state;
  const boardIdx = newState.boards.findIndex(
    (b) => b._id === payload.id?.boardId
  );
  newState.boards[boardIdx] = payload.data as TBoard;
  return { ...newState };
};

const deleteBoard = (state: TAppStateContext, payload: IAppContextPayload) => {
  const filterBoards = state.boards.filter(
    (b) => b._id !== payload.id?.boardId
  );
  const newState = { ...state, boards: filterBoards };
  return newState;
};

const ACTIONS = {
  SETLOCALSTORAGEPENDING: 'localStoragePending',
  SETINITIALSTATE: 'set-initial',
  ADDTASK: 'add-task',
  UPDATETASK: 'update-task',
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
    case ACTIONS.SETLOCALSTORAGEPENDING: {
      if (action.localStorage?.localStoragePending === undefined)
        throw new Error('Reducer payload undefined');
      return setLocalStoragePending(
        state,
        action.localStorage.localStoragePending
      );
    }
    case ACTIONS.SETINITIALSTATE: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
      return setInitialState(state, action.payload);
    }
    case ACTIONS.ADDTASK: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
      return addTask(state, action.payload);
    }
    case ACTIONS.UPDATETASK: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
      return updateTask(state, action.payload);
    }
    case ACTIONS.DELETETASK: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
      return deleteTask(state, action.payload);
    }
    case ACTIONS.ADDBOARD: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
      return addBoard(state, action.payload);
    }
    case ACTIONS.EDITBOARD: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
      return editBoard(state, action.payload);
    }
    case ACTIONS.DELETEBOARD: {
      if (action.payload === undefined)
        throw new Error('Reducer payload undefined');
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
