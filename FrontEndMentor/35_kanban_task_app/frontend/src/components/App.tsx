import {
  AppDispatchContext,
  AppStateContext,
  IAppContextPayload,
} from '#Context/AppContext';
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
  const [state, appDispatch] = useAppReducer({
    boards: [],
    localStoragePending: false,
    localStorageData: undefined,
  });
  const [rootModalDispatch, setRootModalDispatch] =
    useState<TRootModalDispatchContext>({} as TRootModalDispatchContext);
  const [activeBoardId, setActiveBoardId] = useState<string>(
    INITIAL_ACTIVEBOARD || ''
  );

  // Commit tasks ordering to localStorage when tab/browser visibility changes and data is pending
  useEffect(() => {
    const saveTaskOrderToLocalStorage = () => {
      if (
        document.visibilityState === 'hidden' &&
        state.localStoragePending &&
        state.localStorageData
      ) {
        // const timeStamp = new Date().toTimeString().slice(0, 8);
        window.localStorage.setItem('boards-taskOrder', state.localStorageData);
        appDispatch({
          type: 'localStoragePending',
          localStorage: { localStoragePending: false },
        });
      }
    };
    document.addEventListener('visibilitychange', saveTaskOrderToLocalStorage);
    return () =>
      document.removeEventListener(
        'visibilitychange',
        saveTaskOrderToLocalStorage
      );
  }, [appDispatch, state.localStorageData, state.localStoragePending]);

  // TODO:  React Query. Separate out functionality - doing too many things.
  useEffect(() => {
    // Fetch data from backend
    (async function fetchData() {
      try {
        const responseData: unknown = await ApiService.getAllBoards();
        if (!responseData) throw new Error('Unable to get boards!');

        // console.log("USE EFFECT", responseData);

        // Set API Data into local state
        return appDispatch({
          type: 'set-initial',
          payload: responseData as IAppContextPayload,
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
  }, [appDispatch, rootModalDispatch]);

  useEffect(() => {
    // Always set current active board to local storage
    window.localStorage.setItem('active-board', activeBoardId);
  }, [activeBoardId]);

  // console.log('STATE', state.boards);

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
