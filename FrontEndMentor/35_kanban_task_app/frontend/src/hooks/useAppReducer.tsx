/* eslint-disable no-underscore-dangle */
import {
  ActionType,
  GroupDataType,
  IndividualDataType,
  PayLoadType,
} from '#Context/AppContext';
import { Board, StateContextType, SubTaskObjType } from '#Types/types';
import { useCallback, useReducer } from 'react';

const setInitialState = (payload: PayLoadType) => {
  const newState = { boards: payload.data.data };
  return newState as StateContextType;
};

const addTask = (state: StateContextType, payload: PayLoadType) => {
  const newState = state;
  const newBoard = payload.data.data as Board;
  const board = newState.boards.findIndex((b) => b._id === newBoard._id);
  newState.boards[board] = newBoard;
  return { ...newState };
};

// NOTE:  Need to refactor this; currently working with devData and not DB payload type.
const updateTask = (
  state: StateContextType,
  payload: PayLoadType
): StateContextType => {
  const { boardId, columnId, taskId } = payload.id;
  const board = state.boards.findIndex((b) => b._id === boardId);
  const column = state.boards[board].columns.findIndex(
    (c) => c._id === columnId
  );
  const task = state.boards[board].columns[column].tasks.findIndex(
    (t) => t._id === taskId
  );
  const prevTask = state.boards[board].columns[column].tasks[task];
  prevTask.status = (payload.data['input-status'] as IndividualDataType)
    .value as string;
  const newSubtasks = Object.values(
    payload.data['input-group-subtasks'] as GroupDataType
  ).map((t) => ({
    title: t.title,
    isCompleted: t.value as boolean,
  }));
  prevTask.subtasks = newSubtasks as SubTaskObjType[];
  return { ...state };
};

const editTask = (state: StateContextType, payload: PayLoadType) => {
  console.log(payload);
  return state;
};

const deleteTask = (state: StateContextType, payload: PayLoadType) => {
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

const addBoard = (state: StateContextType, payload: PayLoadType) => {
  const newBoard = payload as unknown;
  const prevBoards = state.boards;
  prevBoards.push(newBoard as Board);
  const newState = { boards: prevBoards };
  return newState;
};

const editBoard = (state: StateContextType, payload: PayLoadType) => {
  const newState = state;
  const boardIdx = newState.boards.findIndex(
    (b) => b._id === payload.id.boardId
  );
  newState.boards[boardIdx] = payload.data as Board;
  return { ...newState };
};

const deleteBoard = (state: StateContextType, payload: PayLoadType) => {
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
  state: StateContextType,
  action: ActionType
): StateContextType => {
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
  initialState: StateContextType
): [StateContextType, React.Dispatch<ActionType>] {
  const [state, unstableDispatch] = useReducer(reducer, initialState);
  const dispatch = useCallback(unstableDispatch, [unstableDispatch]);
  return [state, dispatch];
}

export default useAppReducer;
