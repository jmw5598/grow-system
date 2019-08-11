import { Component, OnInit } from '@angular/core';

import { FadeAnimation } from '../../../../shared/animations';

@Component({
  selector: 'gs-system-node-list',
  templateUrl: './system-node-list.component.html',
  styleUrls: ['./system-node-list.component.scss'],
  animations: [FadeAnimation]
})
export class SystemNodeListComponent implements OnInit {

  public nodes: any = [
    {
      id: '1234',
      alias: "Pepper Dutch Buckets",
      imgUrl: "http://localhost:4200/assets/img/mock/hydro-peppers.png"
    },
    {
      id: '1235',
      alias: "Basement Herbs",
      imgUrl: "http://localhost:4200/assets/img/mock/hydro-basil.png"
    },
    {
      id: '1236',
      alias: "Lettuces Hydroponics",
      imgUrl: "http://localhost:4200/assets/img/mock/hydro-lettuce.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
