import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalOptions } from './modal-options.model';

@Component({
  selector: 'gs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public options: ModalOptions;

  @Output()
  public optionChange: EventEmitter<ModalOptions> = new EventEmitter<ModalOptions>();

  constructor() { }

  ngOnInit() {
  }

  dismiss() {
    this.options.isShown = false;
    this.optionChange.emit(this.options);
  }

}
