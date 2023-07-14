/* eslint-disable unicorn/filename-case */
import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.API_HOST}/api/v1`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default class httpAPI {
  constructor() {
    this.client = client;
  }

  async get(url, config = {}) {
    const res = await this.client.get(url, config);
    return res.data;
  }

  async post(url, data = {}, config = {}) {
    const res = await this.client.post(url, data, config);
    return res.data;
  }

  async patch(url, data = {}, config = {}) {
    const res = await this.client.patch(url, data, config);
    return res.data;
  }

  async delete(url, config = {}) {
    const res = await this.client.delete(url, config);
    return res.data;
  }
}
