/* eslint-disable no-underscore-dangle */
import { TAppContextAction, TAppContextPayload } from '#Context/AppContext';
import { TAppStateContext, TBoard } from '#Types/types';
import { useCallback, useReducer } from 'react';

const setInitialState = (payload: TAppContextPayload) => {
  const newState = { boards: payload.data.data };
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

// NOTE:  This is updating entire board state. Refactor.
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
  const prevBoards = state.boards;
  prevBoards.push(newBoard as TBoard);
  const newState = { boards: prevBoards };
  return newState;
};

const editBoard = (state: TAppStateContext, payload: TAppContextPayload) => {
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
