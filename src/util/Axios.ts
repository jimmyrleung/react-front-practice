import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Session } from './Session';

export class Axios {
  instance: AxiosInstance;

  constructor(options?: AxiosRequestConfig) {
    this.instance = axios.create({
      ...options,
      timeout: options && options.timeout ? options.timeout : 10000,
      headers: { 'Content-type': 'application/json' },
      // needs to be set by default, otherwise the content-type header is not set
      data: {}
    });

    this.instance.interceptors.request.use(config => {
      const token = Session.get();

      if (token) {
        config.headers.Authorization = token;
      }

      return config;
    });
  }
}
