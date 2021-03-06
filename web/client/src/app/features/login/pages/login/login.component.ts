import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@core/services';
import { Credentials, Token, Error } from '@core/models';

import { AlertMessage, AlertType } from '@shared/components';
import { FadeAnimation } from '../../../../shared/animations';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'gs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [FadeAnimation]
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: true })
  loginForm: LoginFormComponent

  public alert: AlertMessage;
  public hasError: boolean = false;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {
    this.alert = new AlertMessage("Invalid Username/Password", "", AlertType.WARNING);
  }

  ngOnInit() {}


  onSubmit(credentials: Credentials) {
    this._authenticationService.login(credentials)
      .subscribe(
        token => this.handleLoginSuccess(token),
        error => this.handleLoginError(error)
      );
  }

  private handleLoginSuccess(token: Token) {
    this.hasError = false;
    this.loginForm.form.reset();
    this._router.navigate(['system']);
  }

  private handleLoginError(error: Error) {
    this.hasError = true;
    this.alert = new AlertMessage(error.error, "", AlertType.WARNING);
  }

}
