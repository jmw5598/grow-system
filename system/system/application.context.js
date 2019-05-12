'use strict';

const Rx = require('rxjs');

class ApplicationContext {

  constructor() {
    this._context = {};
  }

  setItem(key, value) {
    if (this._context.hasOwnProperty(key)) {
      this._context[key].data = value;
      this._context[key].source.next(value);
    } else {
      this._context[key] = { data: value };
      this._context[key].source = new Rx.BehaviorSubject(this._context[key].data);
      this._context[key].observable = this._context[key].source.asObservable();
    }
  }

  getItem(key) {
    if (this._context.hasOwnProperty(key)) {
      return this._context[key].observable;
    } else {
      this._context[key] = { data: null };
      this._context[key].source = new Rx.BehaviorSubject(this._context[key].data);
      this._context[key].observable = this._context[key].source.asObservable();
      return this._context[key].observable;
    }
  }
}

module.exports = new ApplicationContext();
