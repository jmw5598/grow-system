import { BehaviorSubject } from 'rxjs'; //require('rxjs');

class ApplicationContext {

  private _context: any;

  constructor() {}

  setItem(key: string, value: any) {
    if (this._context.hasOwnProperty(key)) {
      this._context[key].data = value;
      this._context[key].source.next(value);
    } else {
      this._context[key] = { data: value };
      this._context[key].source = new BehaviorSubject(this._context[key].data);
      this._context[key].observable = this._context[key].source.asObservable();
    }
  }

  getItem(key: string) {
    if (this._context.hasOwnProperty(key)) {
      return this._context[key].observable;
    } else {
      this._context[key] = { data: null };
      this._context[key].source = new BehaviorSubject(this._context[key].data);
      this._context[key].observable = this._context[key].source.asObservable();
      return this._context[key].observable;
    }
  }

}

export const AppContext = new ApplicationContext();
