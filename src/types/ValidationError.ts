export interface ValidationErrorType {
  location: 'body' | 'params';
  msg: string;
  param: string;
}
