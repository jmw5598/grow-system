import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gs-preferences-form-proximity',
  templateUrl: './preferences-form-proximity.component.html',
  styleUrls: ['./preferences-form-proximity.component.scss']
})
export class PreferencesFormProximityComponent implements OnInit {

  @Input()
  public parent: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.parent.setControl('preferences', this._formBuilder.group({
      scale: [null],
      threshold: [null]
    }));
  }

}
