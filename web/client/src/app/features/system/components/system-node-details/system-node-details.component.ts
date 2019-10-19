import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-system-node-details',
  templateUrl: './system-node-details.component.html',
  styleUrls: ['./system-node-details.component.scss']
})
export class SystemNodeDetailsComponent implements OnInit {

  @Input()
  details: any;

  constructor() { }

  ngOnInit() {
  }

}
