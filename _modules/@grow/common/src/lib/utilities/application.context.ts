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
    if (this._context.hasOwnProperty(key)) {
      this._context[key].setValue(value);
    } else {
      const contextValue: ContextValue = new ContextValue(value);
      this._context[key] = contextValue;
    }
  }

  public getItem(key: string): Observable<any> {
    if (this._context.hasOwnProperty(key)) {
      return this._context[key].getValue();
    } else {
      const contextValue: ContextValue = this._context[key];
      this._context[key] = contextValue;
      return contextValue.getValue();
    }
  }
}
