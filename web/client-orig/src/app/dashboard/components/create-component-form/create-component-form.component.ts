import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-component-form',
  templateUrl: './create-component-form.component.html',
  styleUrls: ['./create-component-form.component.scss']
})
export class CreateComponentFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      alias: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      state: ['', [Validators.required]]
    });
  }

  submit(form) {
    console.log(form);
  }

}
