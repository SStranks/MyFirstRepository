import { StateContextType } from '#Types/types';
import React from 'react';

export type ActionType = {
  type: string;
  payload: unknown;
};

type DispatchContextType = React.Dispatch<ActionType>;

export const AppDispatchContext = React.createContext<DispatchContextType>(
  {} as DispatchContextType
);

export const AppStateContext = React.createContext<StateContextType>(
  {} as StateContextType
);
