import React from 'react';

export type ActionType = {
  type: string;
  modalType: string;
};

export type DispatchContextType = React.Dispatch<ActionType>;

const RootModalDispatchContext = React.createContext<DispatchContextType>(
  {} as DispatchContextType
);

export default RootModalDispatchContext;
