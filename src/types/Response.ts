export interface Response<T> {
  code: number;
  message: string;
  body: T;
}
