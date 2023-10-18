import { AppDispatchContext, AppStateContext } from '#Context/AppContext';
import RootModalDispatchContext, {
  TRootModalDispatchContext,
} from '#Context/RootModalContext';
import useAppReducer from '#Hooks/useAppReducer';
import Home from '#Pages/Home';
import ApiService from '#Services/Services';
import { TAppStateContext } from '#Types/types';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootModal from './modal/RootModal';

const INITIAL_ACTIVEBOARD = window.localStorage.getItem('active-board');

function App(): JSX.Element {
  const [state, appDispatch] = useAppReducer({ boards: [] });
  const [rootModalDispatch, setRootModalDispatch] =
    useState<TRootModalDispatchContext>({} as TRootModalDispatchContext);
  const [activeBoardId, setActiveBoardId] = useState<string>(
    INITIAL_ACTIVEBOARD || ''
  );

  // TODO:  React Query. Separate out functionality - doing too many things.
  useEffect(() => {
    // Fetch data from backend
    (async function fetchData() {
      try {
        const responseData = await ApiService.getAllBoards();
        if (!responseData) throw new Error('Unable to get boards!');

        // Set API Data into local state
        return appDispatch({
          type: 'set-initial',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          payload: responseData as any,
        });
      } catch (error) {
        console.error(error);
        return rootModalDispatch({
          type: 'open-modal',
          modalType: 'error',
          modalProps: { title: 'App' },
        });
      }
    })();
    // console.log('USE EFFECT');
  }, [appDispatch, rootModalDispatch]);

  useEffect(() => {
    // Always set current active board to local storage
    window.localStorage.setItem('active-board', activeBoardId);
  }, [activeBoardId]);

  console.log('STATE', state.boards);

  const boardsList = state.boards?.map((board) => ({
    name: board.name,
    id: board._id,
  }));

  const activeBoard = state.boards?.find((item) => item._id === activeBoardId);

  const data = { boardsList, activeBoard };

  return (
    <RootModalDispatchContext.Provider
      value={rootModalDispatch as TRootModalDispatchContext}>
      <AppDispatchContext.Provider value={appDispatch}>
        <AppStateContext.Provider value={state as TAppStateContext}>
          <RootModal setRootModalDispatch={setRootModalDispatch} />
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
