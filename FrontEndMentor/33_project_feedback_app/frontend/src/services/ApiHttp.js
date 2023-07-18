import axios from 'axios';
import handleServiceError from './ApiServiceErrors';

const client = axios.create({
  baseURL: `${process.env.API_HOST}/api/v1`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default class ApiClient {
  constructor() {
    this.client = client;
  }

  async get(url, config = {}) {
    try {
      const res = await this.client.get(url, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {};
  }

  async post(url, data = {}, config = {}) {
    try {
      const res = await this.client.post(url, data, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {};
  }

  async patch(url, data = {}, config = {}) {
    try {
      const res = await this.client.patch(url, data, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {};
  }

  async delete(url, config = {}) {
    try {
      const res = await this.client.delete(url, config);
      return res.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {};
  }
}
