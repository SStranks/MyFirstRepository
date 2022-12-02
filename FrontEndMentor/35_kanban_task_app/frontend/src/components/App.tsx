/* eslint-disable no-underscore-dangle */
import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import useAppReducer from '#Hooks/useAppReducer';
import Home from '#Pages/Home';
import { Board, StateContextType } from '#Types/types';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// TEMP DEV:  // Backend API
const API_URL = 'http://localhost:4000';

const INITIAL_STATE = { boards: [{ name: '', _id: '0', columns: [] }] };

// TODO:  Need to make all 'localhost:4000' FETCH Urls dynamic, lots are hardcoded atm.
// TODO:  Need to tidy up/refactor forms; contain a lot of similar logic that could be extracted.
// TODO:  Need to do 'alt' attributes and accessibility.
// TODO:  Need to make a general useFetch/Axios hook.
// TODO:  Need to make an error handling class for backend interaction failures.
// TODO:  Need to make a loading spinner or animate the logo when awaiting.
// TODO:  Need to check button UX experience; hover area large enough for buttons?
// TODO:  Need to amend the dropdown menu outline, needs to stand out more against the white forms.
// TODO:  Search for '// TODO:  // TEMP DEV:  // NOTE:  etc at project finish and remove.

function App(): JSX.Element {
  // If localStorage: last active board? Get Id of board.
  // Make call to retrieve data - if last active board, then get that data. Otherwise, get board names and first board data.
  // Set sessionStorage: Store board names and board data.
  // Render board names and board data.

  const [state, dispatch] = useAppReducer(INITIAL_STATE);
  const [activeBoardId, setActiveBoardId] = useState('0');

  console.log('APP STATE', state);

  useEffect(() => {
    // Fetch data from backend
    (async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/api/v1/boards`, {
          method: 'GET',
        });
        const JSONdata = await response.json();
        // console.log(JSONdata);
        dispatch({ type: 'set-initial', payload: JSONdata });
        // NOTE:  Hard coded board ID, might change if DB is altered.
        setActiveBoardId('638736f85134f4063ecf8202');

        if (!response.ok) {
          const msg = `An error occured: ${response.status}`;
          throw new Error(msg);
        }
      } catch (error) {
        console.log('REACT: Fetch Error:', error);
      }
    })();
  }, [dispatch]);

  const boards = state.boards?.map((board) => ({
    name: board.name,
    id: board._id,
  }));

  const activeBoard = state.boards?.find(
    (item) => item._id === activeBoardId
  ) as Board;

  console.log('APP', boards, activeBoard);
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
