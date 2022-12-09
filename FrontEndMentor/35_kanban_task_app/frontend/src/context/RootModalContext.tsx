import React from 'react';

export type TRootModalContextAction = {
  type: string;
  modalType?: string;
  modalProps?: { [key: string]: unknown };
};

export type TRootModalDispatchContext = React.Dispatch<TRootModalContextAction>;

const RootModalDispatchContext = React.createContext<TRootModalDispatchContext>(
  {} as TRootModalDispatchContext
);

export default RootModalDispatchContext;
