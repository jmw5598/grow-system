import { Component, OnInit, Input } from '@angular/core';
import { ToasterOptions } from './toaster-options.model';
import { ToastLocation } from './toast-location.enum';

@Component({
  selector: 'gs-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  @Input()
  options: ToasterOptions;

  constructor() {
    this.options = new ToasterOptions(ToastLocation.LOWER_RIGHT);
  }

  ngOnInit() {
    console.log(this.options);
  }

}
