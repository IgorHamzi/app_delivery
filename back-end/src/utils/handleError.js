export default class HandleError extends Error {
  constructor(code, msg) {
    super(msg);
    this.code = code;
  }
}
