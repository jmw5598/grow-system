import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/services';

@Component({
  selector: 'grow-navigation-top-bar',
  templateUrl: './navigation-top-bar.component.html',
  styleUrls: ['./navigation-top-bar.component.scss']
})
export class NavigationTopBarComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this._authenticationService.logout();
  }

}
