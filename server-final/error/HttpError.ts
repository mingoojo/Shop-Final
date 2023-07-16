export default class HttpError extends Error {
  code = 404;

  constructor(message:string, errorCode:number) {
    super(message);
    this.code = errorCode;
  }
}
