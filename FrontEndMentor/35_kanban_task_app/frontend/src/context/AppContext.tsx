import { StateContextType } from '#Types/types';
import React from 'react';

export type IndividualDataType = {
  title: string;
  value: string | boolean;
};

export type GroupDataType = {
  [key: string]: IndividualDataType;
};

type PayloadData = {
  [key: string]: unknown;
};

export type PayLoadType = {
  id: { boardId: string; columnId?: string; taskId?: string };
  data: PayloadData;
};

export type ActionType = {
  type: string;
  payload: PayLoadType;
};

type DispatchContextType = React.Dispatch<ActionType>;

export const AppDispatchContext = React.createContext<DispatchContextType>(
  {} as DispatchContextType
);

export const AppStateContext = React.createContext<StateContextType>(
  {} as StateContextType
);
