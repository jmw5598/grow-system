import { Component, OnInit } from '@angular/core';

import { FadeAnimation } from '../../../../shared/animations';

import { ModalOptions, ModalType, ModalSize } from '@gs/common';
import { ToasterService, ToastType } from '@gs/core';

@Component({
  selector: 'gs-system-node',
  templateUrl: './system-node.component.html',
  styleUrls: ['./system-node.component.scss'],
  animations: [FadeAnimation]
})
export class SystemNodeComponent implements OnInit {

  public options: ModalOptions = {
    isShown: false,
    type: ModalType.DEFAULT,
    size: ModalSize.MEDIUM
  }

  public toastCount: number = 0;

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

  constructor(private _toaster: ToasterService) { }

  ngOnInit() {
  }

  sendToast() {
    const types = [ToastType.DEFAULT, ToastType.SUCCESS, ToastType.INFO, ToastType.WARNING, ToastType.DANGER];
    this._toaster.toast("Testing", "THis is a test message", types[this.toastCount % types.length], 2000);
    this.toastCount++;
  }

  showModal() {
    this.options.isShown = true;
  }

}
