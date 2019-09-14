import { Component, OnInit } from '@angular/core';

import { RelayService } from '@core/services';
import { CommandRequest } from '@shared/models';

@Component({
  selector: 'grow-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  public relays: any = [
    {
      id: "1234",
      type: "relay",
      pin: 12,
      state: "off",
      alias: "Light 1"
    },
    {
      id: "1235",
      type: "relay",
      pin: 16,
      state: "off",
      alias: "Light 2"
    },
    {
      id: "1236",
      type: "relay",
      pin: 20,
      state: "off",
      alias: "Fan"
    },
    {
      id : "1237",
      type: "relay",
      pin: 21,
      state: "off",
      alias: "Nutrient Pump"
    }
  ]

  constructor(private _relayService: RelayService) { }

  ngOnInit() {
  }

  toggle(relay) {
    console.log(relay);
    const state = relay.state === 'off' ? 'on' : 'off';

    const command = new CommandRequest('toggle', { state: state });

    this._relayService.toggle('19291', relay.id, command)
      .subscribe(
        result => {
          relay.state = state;
          console.log(relay);
        },error => console.log(error)
      )
  }

}
