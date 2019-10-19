import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gs-preferences-form-relay',
  templateUrl: './preferences-form-relay.component.html',
  styleUrls: ['./preferences-form-relay.component.scss']
})
export class PreferencesFormRelayComponent implements OnInit {

  @Input()
  public parent: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.parent.setControl('preferences', this._formBuilder.group({

    }));
  }

}
