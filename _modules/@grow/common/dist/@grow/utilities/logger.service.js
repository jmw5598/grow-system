"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_type_enum_1 = require("./log-type.enum");
class Logger {
    constructor(_class) {
        this._class = _class;
    }
    debug(message) {
        this._log(log_type_enum_1.LogType.DEBUG, message);
    }
    warn(message) {
        this._log(log_type_enum_1.LogType.WARN, message);
    }
    error(message) {
        this._log(log_type_enum_1.LogType.ERROR, message);
    }
    danger(message) {
        this._log(log_type_enum_1.LogType.DANGER, message);
    }
    trace(message) {
        this._log(log_type_enum_1.LogType.TRACE, message);
    }
    _log(type, message) {
        const timestamp = new Date();
        console.log(`[${type}][${timestamp.toISOString()}][${this._class}] ${message}`);
    }
}
exports.Logger = Logger;
