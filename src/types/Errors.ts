import type { ValidationErrorType } from './ValidationError';

/* eslint-disable class-methods-use-this */
export class ServerError extends Error {
  constructor() {
    super('A server error has occurred');
    this.name = 'ServerError';
  }
}

export class ValidationError extends Error {
  errors: ValidationErrorType[] = [];

  constructor(errors: ValidationErrorType[]) {
    super('There was something wrong with your request body!');
    this.name = 'ValidationError';
    this.errors = errors;
  }

  displayFormattedError() {
    // "errors": [
    //   {
    //     "location": "body",
    //     "msg": "Invalid value",
    //     "param": "title"
    //   },
    //   {
    //     "location": "body",
    //     "msg": "Invalid value",
    //     "param": "description"
    //   },
    //   {
    //     "location": "body",
    //     "msg": "Invalid value",
    //     "param": "content"
    //   },
    // ]

    let errorStr = '';
    let errorCount = 0;

    const bodyErrors = this.errors
      .filter((err) => err.location === 'body')
      .map((err) => {
        errorCount += 1;
        return err.param;
      })
      .join(', ');

    errorStr += `
      The amount of body errors you have are ${errorCount}.\n
      Located at ${bodyErrors}
    `;

    return errorStr;
  }
}

export type AllErrors = ServerError | ValidationError | any;
