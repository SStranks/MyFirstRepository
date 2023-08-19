// NOTE:  ! This file is not complete. Basic working structure. Depends on backend API types
import { IApiClient } from './ApiHttp';

type TBody = { [x: string]: unknown };

interface TApiExpressResponse<T> {
  status: string;
  results?: number;
  data: T;
}

export interface IItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface IAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface IInvoice {
  id: string;
  slug: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  items: IItem[];
  total: number;
}

export interface IResAllInvoices {
  invoices: IInvoice[];
}

export interface IResInvoice {
  invoice: IInvoice;
}

export interface IApiServiceClient {
  getAllInvoices(): Promise<IInvoice[] | undefined>;
  getInvoice(id: string): Promise<IInvoice | undefined>;
  getInvoice(id: string): Promise<IInvoice | undefined>;
  patchInvoiceStatus(id: string): Promise<IInvoice | undefined>;
  deleteInvoice(id: string): Promise<number | boolean>;
}

export default class ApiServiceClient implements IApiServiceClient {
  ApiServiceClient: IApiClient;

  constructor(ApiClient: IApiClient) {
    this.ApiServiceClient = ApiClient;
  }

  async getAllInvoices(): Promise<IInvoice[] | undefined> {
    try {
      const response = await this.ApiServiceClient.get<
        TApiExpressResponse<IResAllInvoices>
      >('/invoices');
      const {
        data: { invoices: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async getInvoice(id: string): Promise<IInvoice | undefined> {
    try {
      const response = await this.ApiServiceClient.get<
        TApiExpressResponse<IResInvoice>
      >(`/invoices/${id}`);
      const {
        data: { invoice: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async patchInvoiceStatus(id: string): Promise<IInvoice | undefined> {
    try {
      const response = await this.ApiServiceClient.patch<
        TBody,
        TApiExpressResponse<IResInvoice>
      >(`/invoices/${id}/status`, { status: 'paid' });
      const {
        data: { invoice: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async deleteInvoice(id: string) {
    try {
      const response = await this.ApiServiceClient.delete(`/invoices/${id}`);
      const { status: statusCode } = response;
      return statusCode;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
