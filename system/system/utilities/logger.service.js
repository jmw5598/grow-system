'use strict';

const LogType = require('./log-type.enum');

class Logger {

  constructor(_class) {
    this._class = _class;
  }

  debug(message) {
    this._log(LogType.DEBUG, message);
  }

  warn(message) {
    this._log(LogType.WARN, message);
  }

  error(message) {
    this._log(LogType.ERROR, message);
  }

  danger(message) {
    this._log(LogType.DANGER, message);
  }

  trace(message) {
    this._log(LogType.TRACE, message);
  }

  _log(type, message) {
    console.log(`[${type}][${this._class}] ${message}`);
  }

}

module.exports = Logger;
