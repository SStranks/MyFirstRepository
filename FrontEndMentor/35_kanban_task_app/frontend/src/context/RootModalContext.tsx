import React from 'react';

export type ActionType = {
  type: string;
  modalType?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalProps?: { [key: string]: any };
};

export type DispatchContextType = React.Dispatch<ActionType>;

const RootModalDispatchContext = React.createContext<DispatchContextType>(
  {} as DispatchContextType
);

export default RootModalDispatchContext;
