import Home from '#Pages/Home';
import { Route, Routes } from 'react-router-dom';

// TEMP DEV:  Temporary Dev: Development Data JSON
import devDataJSON from '#Data/data.json';
import { useState } from 'react';

type SubTaskObj = {
  title: string;
  isCompleted: boolean;
};

type Task =
  | {
      taskID?: string | undefined;
      title: string;
      description: string;
      status: string;
      subtasks: SubTaskObj[] | [];
    }[]
  | [];

type activeBoardType = {
  name: string;
  boardID: string;
  columns: { name: string; tasks: Task }[];
};
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
  ) as activeBoardType;

  const data = { boards, activeBoard };

  console.log('THIS IS DATA', data);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home data={data} setActiveBoardId={setActiveBoardId} />}
      />
    </Routes>
  );
}

export default App;
