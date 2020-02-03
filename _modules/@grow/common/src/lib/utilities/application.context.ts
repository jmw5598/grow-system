import { BehaviorSubject } from 'rxjs';

export class ApplicationContext {

  private static instance: ApplicationContext;
  private _context: any;

  private constructor() {
    this._context = {};
  }

  public static getInstance(): ApplicationContext {
    if (!ApplicationContext.instance) {
      ApplicationContext.instance = new ApplicationContext();
    }

    return ApplicationContext.instance;
  }

  setItem(key: string, value: any): void {
    if (this._context.hasOwnProperty(key)) {
      this._context[key].data = value;
      this._context[key].source.next(value);
    } else {
      this._context[key] = { data: value };
      this._context[key].source = new BehaviorSubject(this._context[key].data);
      this._context[key].observable = this._context[key].source.asObservable();
    }
  }

  getItem(key: string): void {
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
