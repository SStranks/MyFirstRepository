import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import RootModalDispatchContext, {
  TRootModalDispatchContext,
} from '#Context/RootModalContext';
import useAppReducer from '#Hooks/useAppReducer';
import Home from '#Pages/Home';
import { TAppStateContext, TBoard } from '#Types/types';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootModal from './modal/RootModal';

const INITIAL_LOCALSTORAGE = window.localStorage.getItem('active-board');

function App(): JSX.Element {
  const [state, appDispatch] = useAppReducer({ boards: [] });
  const [rootModalDispatch, setRootModalDispatch] =
    useState<TRootModalDispatchContext>({} as TRootModalDispatchContext);
  const [activeBoardId, setActiveBoardId] = useState<string>('');

  console.log('APP RENDER');

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

        if (!response.ok)
          throw new Error(`${response.status}: ${response.statusText}`);

        // Set App initial state data
        appDispatch({ type: 'set-initial', payload: JSONdata });
        // Set ActiveBoardId; if no localstorage use the first board in returned collection
        return INITIAL_LOCALSTORAGE !== null
          ? setActiveBoardId(INITIAL_LOCALSTORAGE)
          : setActiveBoardId(JSONdata.data.data[0]._id);
      } catch (error) {
        console.error(error);
        return rootModalDispatch({
          type: 'open-modal',
          modalType: 'error',
          modalProps: { title: 'App' },
        });
      }
    })();
  }, [appDispatch, rootModalDispatch]);

  const boards = state.boards?.map((board) => ({
    name: board.name,
    id: board._id,
  }));

  const activeBoard = state.boards?.find(
    (item) => item._id === activeBoardId
  ) as TBoard;

  const data = { boards, activeBoard };

  return (
    <RootModalDispatchContext.Provider
      value={rootModalDispatch as TRootModalDispatchContext}>
      <AppDispatchContext.Provider value={appDispatch}>
        <AppStateContext.Provider value={state as TAppStateContext}>
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
