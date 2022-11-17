import Home from '#Pages/Home';
import { Route, Routes } from 'react-router-dom';

// TEMP DEV:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';

function App(): JSX.Element {
  // If localStorage: last active board? Get Id of board.
  // Make call to retrieve data - if last active board, then get that data. Otherwise, get board names and first board data.
  // Set sessionStorage: Store board names and board data.
  // Render board names and board data.

  // TEMP DEV:  Temporary Dev: Development Data JSON;
  const devData = devDataJSON;
  const boards = devData.boards.map((board) => ({
    name: board.name,
    id: board.boardID,
  }));
  const boardData = devData.boards[0]; // Object
  const data = { boards, boardData };

  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
    </Routes>
  );
}

export default App;
