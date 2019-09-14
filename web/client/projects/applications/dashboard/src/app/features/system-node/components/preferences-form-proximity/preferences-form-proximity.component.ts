import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeasurementUnits } from '@gs/common';

@Component({
  selector: 'gs-preferences-form-proximity',
  templateUrl: './preferences-form-proximity.component.html',
  styleUrls: ['./preferences-form-proximity.component.scss']
})
export class PreferencesFormProximityComponent implements OnInit {

  @Input()
  public parent: FormGroup;

  public form: FormGroup;
  public MeasurementUnits = MeasurementUnits;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      units: [null, [Validators.required]],
      threshold: this._formBuilder.group({
        min: [null, [Validators.required, Validators.min(0)]],
        max: [null, [Validators.required, Validators.min(0)]]
      }),
      interval: [null, [Validators.required]]
    });

    this.parent.setControl('preferences', this.form);
  }

}
