import type { TBoard } from '#Shared/types';

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
