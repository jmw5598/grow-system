import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'grow-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {}

  logout() {
    this._authenticationService.logout();
  }

}
