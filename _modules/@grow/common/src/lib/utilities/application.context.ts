import { Observable } from 'rxjs';
import { ContextValue } from '../models/context-value.model';

export class ApplicationContext {
  private static instance: ApplicationContext;
  private _context: {[key: string]: ContextValue};

  private constructor() {
    this._context = {};
  }

  public static getInstance(): ApplicationContext {
    if (!ApplicationContext.instance) {
      ApplicationContext.instance = new ApplicationContext();
    }

    return ApplicationContext.instance;
  }

  public setItem(key: string, value: any): void {
    if (!this._context.hasOwnProperty(key)) {
      this._context[key] = new ContextValue(value);
    } else {
      this._context[key].setValue(value); 
    }
  }

  public getItem(key: string): Observable<any> {
    if (!this._context.hasOwnProperty(key)) {
      this._context[key] = new ContextValue(null);
    } 

    return this._context[key].getValue();
  }
}
