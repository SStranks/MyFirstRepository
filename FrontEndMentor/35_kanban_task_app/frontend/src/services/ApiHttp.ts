import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import handleServiceError from './ApiServiceErrors';

export interface IApiClient {
  get<TResponse>(url: string): Promise<TResponse>;
  post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse>;
  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}

export default class ApiClient implements IApiClient {
  private client: AxiosInstance;

  // eslint-disable-next-line class-methods-use-this
  protected createAxiosClient(): AxiosInstance {
    return axios.create({
      baseURL: `${process.env.API_HOST}/api/v1`,
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  constructor() {
    this.client = this.createAxiosClient();
  }

  async get<TResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    try {
      const res = await this.client.get<TResponse>(url, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }

  async post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig
  ) {
    try {
      const res = await this.client.post(url, data, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }

  async patch<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig
  ) {
    try {
      const res = await this.client.patch(url, data, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    try {
      const res = await this.client.delete(url, config);
      return res;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as AxiosResponse;
  }
}
