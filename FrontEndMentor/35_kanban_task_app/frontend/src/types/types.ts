/* eslint-disable unicorn/filename-case */

// ------------- //
// Backend Types
// ------------- //
export type TSubTaskObj = {
  _id: string;
  title: string;
  isCompleted: boolean;
};

export type TTask = {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: TSubTaskObj[];
};

export type TColumn = {
  _id: string;
  name: string;
  tasks: TTask[];
};

export type TBoard = {
  _id: string;
  name: string;
  columns: TColumn[];
};

// -------------- //
// Frontend Types
// -------------- //
export type TBoardInfo = { name: string; id: string }[];

export type TAppStateContext = {
  boards: TBoard[];
  localStoragePending: boolean;
  localStorageData: string | undefined;
};

export type TSelectTask = {
  boardId: string;
  columnId: string;
  taskId: string;
};

export type TReturnData = {
  inputName: string;
  value?: string | boolean;
  isCompleted?: boolean;
  groupId?: string;
  columnId?: string;
};

export type TInputProp = {
  title?: string;
  inputName: string;
  value: string;
  error: boolean;
  key?: string;
  statusArr?: string[][];
  isCompleted?: boolean;
};

export type TNestedInputProp = {
  [key: string]: TInputProp;
};

export type TNewFormData = {
  [key: string]: TInputProp | TNestedInputProp;
};

// Root Modal
export type TRootModalState = {
  modalType: string[];
  modalProps: Record<string, unknown>[];
};
