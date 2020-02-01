import { LogType } from './log-type.enum';
export declare class Logger {
    _class: string;
    constructor(_class: string);
    debug(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    danger(message: string): void;
    trace(message: string): void;
    _log(type: LogType, message: string): void;
}
