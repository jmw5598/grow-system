import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BreadcrumbStub } from './breadcrumb-stub.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private _breadcrumbsSource: BehaviorSubject<BreadcrumbStub[]>;
  public breadcrumbs: Observable<BreadcrumbStub[]>;

  constructor() {
    this._breadcrumbsSource = new BehaviorSubject<BreadcrumbStub[]>([]);
    this.breadcrumbs = this._breadcrumbsSource.asObservable();
  }

  setBreadcumbs(breadcrumbs: BreadcrumbStub[]) {
    this._breadcrumbsSource.next(breadcrumbs);
  }

}
