import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public isAuthenticated: boolean;

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this._authenticationService.isAuthenticated
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

}
