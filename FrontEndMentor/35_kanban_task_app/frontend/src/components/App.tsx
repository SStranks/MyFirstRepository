import {
  ActionType,
  AppDispatchContext,
  AppStateContext,
  GroupDataType,
  IndividualDataType,
  PayLoadType,
} from '#Context/AppContext';
import Home from '#Pages/Home';
import { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// TEMP DEV:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';
import { Board, StateContextType, SubTaskObjType } from '#Types/types';

const INITIALSTATE = { ...devDataJSON };

const ACTIONS = {
  ADDTASK: 'add-task',
  UPDATETASK: 'update-task',
  EDITTASK: 'edit-task',
  DELETETASK: 'delete-task',
  ADDBOARD: 'add-board',
  EDITBOARD: 'edit-board',
  DELETEBOARD: 'delete-board',
};

const updateTask = (
  state: StateContextType,
  payload: PayLoadType
): StateContextType => {
  const { boardId, columnId, taskId } = payload.id;
  const board = state.boards.findIndex((b) => b.boardID === boardId);
  const column = state.boards[board].columns.findIndex(
    (c) => c.columnID === columnId
  );
  const task = state.boards[board].columns[column].tasks.findIndex(
    (t) => t.taskID === taskId
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

const reducer = (
  state: StateContextType,
  action: ActionType
): StateContextType => {
  switch (action.type) {
    case ACTIONS.UPDATETASK: {
      return updateTask(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function App(): JSX.Element {
  // If localStorage: last active board? Get Id of board.
  // Make call to retrieve data - if last active board, then get that data. Otherwise, get board names and first board data.
  // Set sessionStorage: Store board names and board data.
  // Render board names and board data.

  const [state, dispatch] = useReducer(reducer, INITIALSTATE);
  const [activeBoardId, setActiveBoardId] = useState('pl-1');

  console.log('APP STATE', state);

  const boards = state.boards.map((board) => ({
    name: board.name,
    id: board.boardID,
  }));

  const activeBoard = state.boards.find(
    (item) => item.boardID === activeBoardId
  ) as Board;

  const data = { boards, activeBoard };

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state as StateContextType}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                boardData={data}
                activeBoardId={activeBoardId}
                setActiveBoardId={setActiveBoardId}
              />
            }
          />
        </Routes>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export default App;
