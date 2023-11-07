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
