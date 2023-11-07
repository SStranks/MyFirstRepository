export interface TSubTask {
  _id: string;
  title: string;
  isCompleted: boolean;
}

export interface TTask {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: TSubTask[];
}

export interface TColumn {
  _id: string;
  name: string;
  tasks: TTask[];
}

export interface TBoard {
  _id: string;
  name: string;
  columns: TColumn[];
}
