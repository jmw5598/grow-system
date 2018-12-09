import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { AlertMessage, AlertType } from '@shared/components/alert-message';
import { Credentials, Error, Token } from '@shared/models';
import { AuthenticationService } from '@core/services';

@Component({
  selector: 'grow-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm: LoginFormComponent

  public form: FormGroup;
  public alert: AlertMessage;
  public hasError: boolean = false;

  constructor(
      private _authenticationService: AuthenticationService,
      private _formBuilder: FormBuilder,
      private _router: Router
  ) {
    this.alert = new AlertMessage("Invalid Username/Password", "", AlertType.WARNING);
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit(credentials: Credentials) {
    console.log("credentials", credentials);
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
    this.alert = new AlertMessage(error.error, "", AlertType.WARNING);
  }

}
