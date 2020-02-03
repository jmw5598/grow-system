import { LogType } from './log-type.enum';

export class Logger {

  constructor(public _class: string) {}

  debug(message: string): void {
    this._log(LogType.DEBUG, message);
  }

  warn(message: string): void {
    this._log(LogType.WARN, message);
  }

  error(message: string): void {
    this._log(LogType.ERROR, message);
  }

  danger(message: string): void {
    this._log(LogType.DANGER, message);
  }

  trace(message: string): void {
    this._log(LogType.TRACE, message);
  }

  _log(type: LogType, message: string): void {
    const timestamp: Date = new Date();
    // tslint:disable-next-line:no-console
    console.log(`[${type}][${timestamp.toISOString()}][${this._class}] ${message}`);
  }

}
