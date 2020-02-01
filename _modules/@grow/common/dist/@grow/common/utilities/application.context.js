"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs"); //require('rxjs');
class ApplicationContext {
    constructor() { }
    setItem(key, value) {
        if (this._context.hasOwnProperty(key)) {
            this._context[key].data = value;
            this._context[key].source.next(value);
        }
        else {
            this._context[key] = { data: value };
            this._context[key].source = new rxjs_1.BehaviorSubject(this._context[key].data);
            this._context[key].observable = this._context[key].source.asObservable();
        }
    }
    getItem(key) {
        if (this._context.hasOwnProperty(key)) {
            return this._context[key].observable;
        }
        else {
            this._context[key] = { data: null };
            this._context[key].source = new rxjs_1.BehaviorSubject(this._context[key].data);
            this._context[key].observable = this._context[key].source.asObservable();
            return this._context[key].observable;
        }
    }
}
exports.AppContext = new ApplicationContext();
