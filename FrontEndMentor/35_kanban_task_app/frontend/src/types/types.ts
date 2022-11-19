/* eslint-disable unicorn/filename-case */
export type SubTaskObjType = {
  title: string;
  isCompleted: boolean;
};

export type TaskType =
  | {
      taskID: string;
      title: string;
      description: string;
      status: string;
      subtasks: SubTaskObjType[];
    }[]
  | [];

export type ColumnType = { columnID: string; name: string; tasks: TaskType };

export type Board = {
  name: string;
  boardID: string;
  columns: ColumnType[];
};

export type BoardInfo = { name: string; id: string }[];

export type StateContextType = {
  boards: Board[];
};

export type ReturnDataType = {
  inputName: string;
  value: string | boolean;
  groupId?: string;
};

export type InputPropType = {
  inputName: string;
  value: string;
  error: boolean;
  key?: number;
  statusArr?: string[];
};

export type NestedInputPropType = {
  [key: string]: InputPropType;
};

export type newFormDataType = {
  [key: string]: InputPropType | NestedInputPropType;
};
