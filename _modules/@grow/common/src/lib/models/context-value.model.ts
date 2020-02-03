import { BehaviorSubject, Observable } from 'rxjs';

export class ContextValue {
  private _data: any;
  private _source: BehaviorSubject<any>;

  constructor(value: any) {
    this._data = value;
    this._source = new BehaviorSubject<any>(this._data);
  }

  public getValue(): Observable<any> {
    return this._source.asObservable();
  }

  public setValue(value: any): void {
    this._data = value;
    this._source.next(this._data);
  }
}