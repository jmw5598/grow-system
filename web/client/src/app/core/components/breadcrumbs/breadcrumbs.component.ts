import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { BreadcrumbStub } from './breadcrumb-stub.model';

@Component({
  selector: 'gs-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  public baseStub: BreadcrumbStub;

  private _subscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._subscription = this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((navigationEnd) => {
        console.log(navigationEnd);
        const endpoint = <NavigationEnd>navigationEnd;
        const url = endpoint.urlAfterRedirects || endpoint.url;
        console.log(url);
        //this._breadcrumbsData = url.substring(1).split("/");
        //this._breadcrumbsSource.next(this._breadcrumbsData);
      });
  }

  ngOnInit() {
  }

}
