import { Component, OnInit, Input } from '@angular/core';
import { RelayComponent } from '@core/store';

@Component({
  selector: 'gs-tile-relays',
  templateUrl: './tile-relays.component.html',
  styleUrls: ['./tile-relays.component.scss']
})
export class TileRelaysComponent implements OnInit {

  @Input()
  public relays: RelayComponent[];

  constructor() { }

  ngOnInit() {
  }

  onToggle(toggle) {
    console.log('toggle', toggle);
  }

}
