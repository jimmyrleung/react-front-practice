export interface IRequestHook<T> {
  data: T;
  error: any;
  loading: boolean;
};
