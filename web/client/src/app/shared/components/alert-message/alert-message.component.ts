import { Component, OnInit, Input } from '@angular/core';

import { AlertMessage } from './alert-message.model';
import { AlertType } from './alert-type.enum';

@Component({
  selector: 'gs-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  @Input()
  alert: AlertMessage

  constructor() {
    this.alert = new AlertMessage(
      "Something went wrong!", "Alert!", AlertType.PRIMARY);
  }

  ngOnInit() {
  }

}
