import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/services/authentication.service';
import { FadeAnimation } from '@shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [FadeAnimation]
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
