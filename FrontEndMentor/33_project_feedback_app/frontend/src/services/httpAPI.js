/* eslint-disable unicorn/filename-case */
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_HOST,
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
}
