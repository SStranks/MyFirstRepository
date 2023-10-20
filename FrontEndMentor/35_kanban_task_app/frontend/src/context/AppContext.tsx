import { TAppStateContext } from '#Types/types';
import React from 'react';

export interface IAppContextPayload {
  id: { boardId: string; columnId?: string; taskId?: string };
  data: {
    [key: string]: unknown;
  };
}

export interface IAppContextLocalStorage {
  localStoragePending?: boolean;
  localStorageData?: string; // JSON
}

export type TAppContextAction = {
  type: string;
  payload?: IAppContextPayload;
  localStorage?: IAppContextLocalStorage;
};

type TAppDispatchContext = React.Dispatch<TAppContextAction>;

export const AppDispatchContext = React.createContext<TAppDispatchContext>(
  {} as TAppDispatchContext
);

export const AppStateContext = React.createContext<TAppStateContext>(
  {} as TAppStateContext
);
