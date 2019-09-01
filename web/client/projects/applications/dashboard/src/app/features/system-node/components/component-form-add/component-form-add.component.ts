import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemNodeComponent, SystemNodeComponentType } from '@gs/common';

@Component({
  selector: 'gs-component-form-add',
  templateUrl: './component-form-add.component.html',
  styleUrls: ['./component-form-add.component.scss']
})
export class ComponentFormAddComponent implements OnInit {

  public form: FormGroup
  public SystemNodeComponentType = SystemNodeComponentType;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      alias: [null, [Validators.required]],
      type: [null, [Validators.required]],
      pin: [null, [Validators.required, Validators.max(40), Validators.min(1)]],
      preferences: []
    });
  }

  addComponent(component: SystemNodeComponent) {
    console.log("adding new component");
    console.log(component);
  }

}
