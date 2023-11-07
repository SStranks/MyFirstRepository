export interface ISubTask {
  _id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: ISubTask[];
}

export interface IColumn {
  _id: string;
  name: string;
  tasks: ITask[];
}

export interface IBoard {
  _id: string;
  name: string;
  columns: IColumn[];
}
