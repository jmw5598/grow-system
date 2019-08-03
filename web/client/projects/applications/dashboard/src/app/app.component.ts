import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@gs/core';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
