import { Component, OnInit, Input } from '@angular/core';
import { ModalOptions } from './modal-options.model';

@Component({
  selector: 'gs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public options: ModalOptions;

  constructor() { }

  ngOnInit() {
  }

}
