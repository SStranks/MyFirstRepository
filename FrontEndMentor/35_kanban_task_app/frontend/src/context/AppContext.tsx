import { TAppStateContext } from '#Types/types';
import React from 'react';

export type TAppContextPayload = {
  id: { boardId: string; columnId?: string; taskId?: string };
  data: {
    [key: string]: unknown;
  };
};

export type TAppContextAction = {
  type: string;
  payload: TAppContextPayload;
};

type TAppDispatchContext = React.Dispatch<TAppContextAction>;

export const AppDispatchContext = React.createContext<TAppDispatchContext>(
  {} as TAppDispatchContext
);

export const AppStateContext = React.createContext<TAppStateContext>(
  {} as TAppStateContext
);
