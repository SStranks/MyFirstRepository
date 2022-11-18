import { StateContextType } from '#Types/types';
import React from 'react';

type ActionType = { type: string; payload: unknown };

type DispatchContextType = React.Dispatch<ActionType> | undefined;

export const AppDispatchContext =
  React.createContext<DispatchContextType>(undefined);

export const AppStateContext = React.createContext<StateContextType>(
  {} as StateContextType
);
