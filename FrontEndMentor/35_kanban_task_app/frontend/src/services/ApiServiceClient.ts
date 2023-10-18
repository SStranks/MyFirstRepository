// NOTE:  ! This file is not complete. Basic working structure. Depends on backend API types
import { IApiClient } from './ApiHttp';

export type TBody = { [x: string]: unknown };

interface TApiExpressResponse<T> {
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

export interface IApiServiceClient {
  getAllBoards(): Promise<IBoard[] | undefined>;
  // getInvoice(id: string): Promise<IInvoice | undefined>;
  // postInvoice(data: TBody): Promise<IInvoice | undefined>;
  // patchInvoice(id: string, data: TBody): Promise<IInvoice | undefined>;
  // patchInvoiceStatus(id: string): Promise<IInvoice | undefined>;
  // deleteInvoice(id: string): Promise<number | boolean>;
}

export default class ApiServiceClient implements IApiServiceClient {
  ApiServiceClient: IApiClient;

  constructor(ApiClient: IApiClient) {
    this.ApiServiceClient = ApiClient;
  }

  async getAllBoards(): Promise<IBoard[] | undefined> {
    try {
      const response = await this.ApiServiceClient.get<
        TApiExpressResponse<IResAllBoards>
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

  // async getInvoice(id: string): Promise<IInvoice | undefined> {
  //   try {
  //     const response = await this.ApiServiceClient.get<
  //       TApiExpressResponse<IResInvoice>
  //     >(`/invoices/${id}`);
  //     const {
  //       data: { invoice: responseData },
  //     } = response;
  //     return responseData;
  //   } catch (error) {
  //     console.error(error);
  //     return undefined;
  //   }
  // }

  // async postInvoice(data: TBody): Promise<IInvoice | undefined> {
  //   try {
  //     const response = await this.ApiServiceClient.post<
  //       TBody,
  //       TApiExpressResponse<IResInvoice>
  //     >('/invoices', data);
  //     const {
  //       data: { invoice: responseData },
  //     } = response;
  //     return responseData;
  //   } catch (error) {
  //     console.error(error);
  //     return undefined;
  //   }
  // }

  // async patchInvoice(id: string, data: TBody): Promise<IInvoice | undefined> {
  //   try {
  //     const response = await this.ApiServiceClient.patch<
  //       TBody,
  //       TApiExpressResponse<IResInvoice>
  //     >(`/invoices/${id}`, data);
  //     const {
  //       data: { invoice: responseData },
  //     } = response;
  //     return responseData;
  //   } catch (error) {
  //     console.error(error);
  //     return undefined;
  //   }
  // }

  // async patchInvoiceStatus(id: string): Promise<IInvoice | undefined> {
  //   try {
  //     const response = await this.ApiServiceClient.patch<
  //       TBody,
  //       TApiExpressResponse<IResInvoice>
  //     >(`/invoices/${id}/status`, { status: 'paid' });
  //     const {
  //       data: { invoice: responseData },
  //     } = response;
  //     return responseData;
  //   } catch (error) {
  //     console.error(error);
  //     return undefined;
  //   }
  // }

  // async deleteInvoice(id: string) {
  //   try {
  //     const response = await this.ApiServiceClient.delete(`/invoices/${id}`);
  //     const { status: statusCode } = response;
  //     return statusCode;
  //   } catch (error) {
  //     console.error(error);
  //     return false;
  //   }
  // }
}
