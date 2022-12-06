/* eslint-disable no-underscore-dangle */
import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import RootModalDispatchContext, {
  DispatchContextType,
} from '#Context/RootModalContext';
import useAppReducer from '#Hooks/useAppReducer';
import Home from '#Pages/Home';
import { Board, StateContextType } from '#Types/types';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootModal from './modal/RootModal';

const INITIAL_LOCALSTORAGE = window.localStorage.getItem('active-board');

// DEBUG:  // ✔  When increasing description input height, scrolling off page reveals underlying page bug at bottom (body).
// DEBUG:  // ✔  On initial load, flickers from 'fake board' to actual data
// TODO:  // ✔  Need to make all 'localhost:4000' FETCH Urls dynamic, lots are hardcoded atm.
// TODO:  // ✔  Need to amend the dropdown menu outline, needs to stand out more against the white forms.
// TODO:  // ✔  Need to check button UX experience; hover area large enough for buttons? - use ::before to create extendable click area.
// TODO:  // ✖  Need to change routes in backend; the response objects should all be DATA: { DATA: [returndata]}
// TODO:  // ✖  Need to check backend - the response objects for each method, sending back board? task? can we unify all this?
// TODO:  // ✖  Need to solve if task is moved to another column, change it on the backend too.
// TODO:  // ✖  Need to add functionality for 'new column' button.
// TODO:  // ✖  Need to tidy up/refactor forms; contain a lot of similar logic that could be extracted.
// TODO:  // ✖  Need to make an error handling class for backend interaction failures.
// TODO:  // ✖  Need to make a loading spinner or animate the logo when awaiting.
// TODO:  // ✖  Need to make a general useFetch/Axios hook.
// TODO:  // ✖  Need to do 'alt' attributes and accessibility.
// TODO:  // ✖  Need to tidy up types everywhere.
// TODO:  // ✖  Need to make a 'click area' mixin for elements; take into account content area and scale click area by %.
// TODO:  // ✖  Need to rename dispatch/modalDispatch across all files. appDispatch/modalDispatch.
// TODO:  // ✖  Need to see if we can pass props for form components instead of relying on context so much.
// TODO:  // ✖  Need to clean up old modal file; imports and use.
// TODO:  // ✖  Search for '// TODO:  // TEMP DEV:  // HACK:  // DEBUG:  // NOTE:  console.log etc at project finish and remove.

function App(): JSX.Element {
  const [state, dispatch] = useAppReducer({ boards: [] });
  const [rootModalDispatch, setRootModalDispatch] = useState({});
  const [activeBoardId, setActiveBoardId] = useState<string>('');

  console.log('APP STATE', state, activeBoardId);

  useEffect(() => {
    // Fetch data from backend
    (async function fetchData() {
      try {
        const response = await fetch(
          `http://${process.env.API_HOST}/api/v1/boards`,
          {
            method: 'GET',
          }
        );
        const JSONdata = await response.json();

        if (!response.ok) {
          const msg = `An error occured: ${response.status}`;
          throw new Error(msg);
        }

        // Set App initial state data
        dispatch({ type: 'set-initial', payload: JSONdata });
        // Set ActiveBoardId; if no localstorage use the first board in returned collection
        return INITIAL_LOCALSTORAGE !== null
          ? setActiveBoardId(INITIAL_LOCALSTORAGE)
          : setActiveBoardId(JSONdata.data.data[0]._id);
      } catch (error) {
        return console.log('REACT: Fetch Error:', error);
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
    <RootModalDispatchContext.Provider
      value={rootModalDispatch as DispatchContextType}>
      <AppDispatchContext.Provider value={dispatch}>
        <AppStateContext.Provider value={state as StateContextType}>
          <RootModal
            setRootModalDispatch={setRootModalDispatch}
            // activeBoardId={activeBoardId}
            // setActiveBoardId={setActiveBoardId}
          />
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
    </RootModalDispatchContext.Provider>
  );
}

export default App;
