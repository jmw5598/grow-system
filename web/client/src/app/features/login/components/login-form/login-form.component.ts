import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Credentials } from '@core/models';

@Component({
  selector: 'gs-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output()
  public onSubmit: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  public form: FormGroup;
  public hasError: boolean = true;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  submit(credentials: Credentials) {
    this.onSubmit.emit(credentials);
  }

}
