import { Component, OnInit } from '@angular/core';

import { FadeAnimation } from '../../../../shared/animations';

@Component({
  selector: 'gs-system-node',
  templateUrl: './system-node.component.html',
  styleUrls: ['./system-node.component.scss'],
  animations: [FadeAnimation]
})
export class SystemNodeComponent implements OnInit {

  public relays: any = [
    {
      alias: 'Nutrient Pump',
      state: 'off',
    },
    {
      alias: 'Exhaust Fan',
      state: 'on'
    },
    {
      alias: 'Light',
      state: 'on',
    },
    {
      alias: 'Circulation Fan',
      state: 'off'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
