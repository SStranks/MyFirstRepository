import {
  ActionType,
  AppDispatchContext,
  AppStateContext,
} from '#Context/AppContext';
import Home from '#Pages/Home';
import { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// TEMP DEV:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';
import { Board, StateContextType } from '#Types/types';

const INITIALSTATE = { ...devDataJSON };

// type ActionType = { type: string; payload: Record<string, string> };

const ACTIONS = { UPDATETASK: 'update-task' };

const reducer = <S,>(state: S, action: ActionType): S => {
  switch (action.type) {
    case ACTIONS.UPDATETASK: {
      console.log(action.payload);
      return state;
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
  const [boardData, setBoardData] = useState({ ...devDataJSON });
  const [activeBoardId, setActiveBoardId] = useState('pl-1');

  const num = Math.floor(Math.random() * 100);
  if (num === 1) {
    console.log(boardData, setBoardData, setActiveBoardId);
  }

  // TEMP DEV:  Temporary Dev: Development Data JSON;
  const boards = boardData.boards.map((board) => ({
    name: board.name,
    id: board.boardID,
  }));

  const activeBoard = boardData.boards.find(
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
