import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemNodeComponent, SystemNodeComponentType, System } from '@shared/models';
import { SystemNodeComponentService } from '@core/services';

@Component({
  selector: 'gs-component-form-add',
  templateUrl: './component-form-add.component.html',
  styleUrls: ['./component-form-add.component.scss']
})
export class ComponentFormAddComponent implements OnInit {

  public form: FormGroup
  public SystemNodeComponentType = SystemNodeComponentType;

  constructor(
    private _formBuilder: FormBuilder,
    private _systemNodeComponentService: SystemNodeComponentService
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      alias: [null, [Validators.required]],
      type: [null, [Validators.required]],
      pin: [null, [Validators.required, Validators.max(40), Validators.min(1)]],
      preferences: []
    });
  }

  addComponent(component: SystemNodeComponent) {
    this._systemNodeComponentService.create(19291, component)
      .subscribe(
        success => alert("Success!!"),
        error => console.log(error)
      )
  }

}
