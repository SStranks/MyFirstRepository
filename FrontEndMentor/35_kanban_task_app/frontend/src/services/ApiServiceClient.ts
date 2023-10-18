// NOTE:  ! This file is not complete. Basic working structure. Depends on backend API types
import { IApiClient } from './ApiHttp';

export interface IBody {
  [x: string]: unknown;
}

interface IApiExpressResponse<T> {
  status: string;
  results?: number;
  data: T;
}

export interface IBoard {
  _id: string;
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  _id: string;
  name: string;
  tasks: ITask[];
}

export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: ISubTask[];
}

export interface ISubTask {
  _id: string;
  title: string;
  isCompleted: boolean;
}

export interface IResAllBoards {
  data: IBoard[] | [];
}

export interface IResBoard {
  data: IBoard;
}

export interface IApiServiceClient {
  getAllBoards(): Promise<IBoard[] | undefined>;
  postBoard(data: IBody): Promise<IBoard | undefined>;
  patchBoard(id: string, data: IBody): Promise<IBoard | undefined>;
  deleteBoard(id: string): Promise<number | boolean>;
  postTask(
    boardId: string,
    columnId: string,
    data: IBody
  ): Promise<IBoard | undefined>;
  patchTask(
    boardId: string,
    columnId: string,
    taskId: string,
    data: IBody
  ): Promise<IBoard | undefined>;
  deleteTask(
    boardId: string,
    columnId: string,
    taskId: string
  ): Promise<number | boolean>;
}

export default class ApiServiceClient implements IApiServiceClient {
  ApiServiceClient: IApiClient;

  constructor(ApiClient: IApiClient) {
    this.ApiServiceClient = ApiClient;
  }

  async getAllBoards(): Promise<IBoard[] | undefined> {
    try {
      const response = await this.ApiServiceClient.get<
        IApiExpressResponse<IResAllBoards>
      >('/boards');
      const {
        data: { data: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async postBoard(data: IBody): Promise<IBoard | undefined> {
    try {
      const response = await this.ApiServiceClient.post<
        IBody,
        IApiExpressResponse<IResBoard>
      >('/boards', data);
      const {
        data: { data: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async patchBoard(id: string, data: IBody): Promise<IBoard | undefined> {
    try {
      const response = await this.ApiServiceClient.patch<
        IBody,
        IApiExpressResponse<IResBoard>
      >(`boards/${id}`, data);
      const {
        data: { data: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async deleteBoard(id: string): Promise<number | boolean> {
    try {
      const response = await this.ApiServiceClient.delete(`boards/${id}`);
      const { status: statusCode } = response;
      return statusCode;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async postTask(
    boardId: string,
    columnId: string,
    data: IBody
  ): Promise<IBoard | undefined> {
    try {
      const response = await this.ApiServiceClient.post<
        IBody,
        IApiExpressResponse<IResBoard>
      >(`boards/${boardId}/${columnId}`, data);
      const {
        data: { data: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async patchTask(
    boardId: string,
    columnId: string,
    taskId: string,
    data: IBody
  ): Promise<IBoard | undefined> {
    try {
      const response = await this.ApiServiceClient.patch<
        IBody,
        IApiExpressResponse<IResBoard>
      >(`boards/${boardId}/${columnId}/${taskId}`, data);
      const {
        data: { data: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async deleteTask(
    boardId: string,
    columnId: string,
    taskId: string
  ): Promise<number | boolean> {
    try {
      const response = await this.ApiServiceClient.delete(
        `boards/${boardId}/${columnId}/${taskId}`
      );
      const { status: statusCode } = response;
      return statusCode;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
