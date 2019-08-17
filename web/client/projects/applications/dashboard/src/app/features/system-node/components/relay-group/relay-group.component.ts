import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-relay-group',
  templateUrl: './relay-group.component.html',
  styleUrls: ['./relay-group.component.scss']
})
export class RelayGroupComponent implements OnInit {

  @Input()
  public relays: any;

  constructor() { }

  ngOnInit() {
  }

}
