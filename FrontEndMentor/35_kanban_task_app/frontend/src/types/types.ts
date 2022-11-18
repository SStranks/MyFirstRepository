/* eslint-disable unicorn/filename-case */
export type SubTaskObjType = {
  title: string;
  isCompleted: boolean;
};

export type TaskType =
  | {
      taskID?: string | undefined;
      title: string;
      description: string;
      status: string;
      subtasks: SubTaskObjType[] | [];
    }[]
  | [];

export type Board = {
  name: string;
  boardID: string;
  columns: { name: string; tasks: TaskType }[];
};

export type BoardInfo = { name: string; id: string }[];
