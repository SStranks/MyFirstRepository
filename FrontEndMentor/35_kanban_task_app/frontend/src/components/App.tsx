import Home from '#Pages/Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// TEMP DEV:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';
import { Board } from '#Types/types';

function App(): JSX.Element {
  // If localStorage: last active board? Get Id of board.
  // Make call to retrieve data - if last active board, then get that data. Otherwise, get board names and first board data.
  // Set sessionStorage: Store board names and board data.
  // Render board names and board data.

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

  console.log('THIS IS DATA', data);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            data={data}
            activeBoardId={activeBoardId}
            setActiveBoardId={setActiveBoardId}
          />
        }
      />
    </Routes>
  );
}

export default App;
