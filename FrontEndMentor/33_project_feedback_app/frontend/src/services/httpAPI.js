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

  get(url, config = {}) {
    return this.client.get(url, config);
  }

  post(url, data = {}, config = {}) {
    return this.client.post(url, data, config);
  }

  patch(url, data = {}, config = {}) {
    return this.client.patch(url, data, config);
  }

  delete(url, config = {}) {
    return this.client.delete(url, config);
  }
}
