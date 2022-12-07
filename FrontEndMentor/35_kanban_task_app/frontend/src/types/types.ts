/* eslint-disable unicorn/filename-case */
export type SubTaskObjType = {
  _id: string;
  title: string;
  isCompleted: boolean;
};

export type TaskType = {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: SubTaskObjType[];
};

export type ColumnType = {
  _id: string;
  name: string;
  tasks: TaskType[];
};

export type Board = {
  _id: string;
  name: string;
  columns: ColumnType[];
};

export type BoardInfo = { name: string; id: string }[];

export type StateContextType = {
  boards: Board[];
};

export type ReturnDataType = {
  inputName: string;
  value?: string | boolean;
  isCompleted?: boolean;
  groupId?: string;
};

export type InputPropType = {
  title?: string;
  inputName: string;
  value: string;
  error: boolean;
  key?: string;
  statusArr?: string[];
  isCompleted?: boolean;
};

export type NestedInputPropType = {
  [key: string]: InputPropType;
};

export type newFormDataType = {
  [key: string]: InputPropType | NestedInputPropType;
};
