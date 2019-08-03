import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gs-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  @Input()
  public label: string = 'Label';

  @Input()
  public state: string = 'off';

  @Output()
  public onToggle: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  toggle(state) {
    this.state = state === 'on' ? 'off' : 'on';
    this.onToggle.emit(this.state);
  }

}
