import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperatureScale } from '@shared/models';

@Component({
  selector: 'gs-preferences-form-temperature-humidity',
  templateUrl: './preferences-form-temperature-humidity.component.html',
  styleUrls: ['./preferences-form-temperature-humidity.component.scss']
})
export class PreferencesFormTemperatureHumidityComponent implements OnInit {

  @Input()
  public parent: FormGroup;
  
  public form: FormGroup;
  public TemperatureScale = TemperatureScale;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      scale: [null],
      threshold: this._formBuilder.group({
        min: [null, [Validators.required, Validators.max(100), Validators.min(0)]],
        max: [null, [Validators.required, Validators.max(100), Validators.min(0)]]
      }),
      interval: [null, [Validators.required, Validators.min(1000)]]
    });

    this.parent.setControl('preferences', this.form);
  }

}
