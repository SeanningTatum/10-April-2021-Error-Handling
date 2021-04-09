export class ServerError extends Error {
  constructor() {
    super('A server error has occurred');
    this.name = 'ServerError';
  }
}

export class BadRequestError extends Error {
  constructor() {
    super(`Something was wrong with your request body`);
    this.name = 'BadRequestError';
  }
}

export class NotAuthorizedError extends Error {
  constructor() {
    super('User is not authorized to view this file!');
    this.name = 'NotAuthorizedError';
  }
}
export class NotFoundError extends Error {
  constructor() {
    super(`Entity is not found!`);
    this.name = 'NotFoundError';
  }
}

export type AllErrors = ServerError | NotAuthorizedError | NotFoundError;
