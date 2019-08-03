import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, Credentials, Token } from '@gs/core';

import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'gs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm: LoginFormComponent

  //public alert: AlertMessage;
  public hasError: boolean = false;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {
    //this.alert = new AlertMessage("Invalid Username/Password", "", AlertType.WARNING);
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
    this._router.navigate(['dashboard']);
  }

  private handleLoginError(error: Error) {
    this.hasError = true;
    //this.alert = new AlertMessage(error.error, "", AlertType.WARNING);
  }

}
