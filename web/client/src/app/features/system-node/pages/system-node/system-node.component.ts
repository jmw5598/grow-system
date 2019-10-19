import { Component, OnInit } from '@angular/core';

import { FadeAnimation } from '@shared/animations';

import { ModalOptions, ModalType, ModalSize } from '@shared/components';
import { ToasterService, ToastType } from '@core/components';
import { RelayService } from '@core/services';

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
      id: '1234',
      alias: 'Nutrient Pump',
      state: 'off',
    },
    {
      id: '1235',
      alias: 'Exhaust Fan',
      state: 'on'
    },
    {
      id: '1236',
      alias: 'Light',
      state: 'on',
    },
    {
      id: '1237',
      alias: 'Circulation Fan',
      state: 'off'
    }
  ];

  constructor(
    private _relayService: RelayService,
    private _toaster: ToasterService
  ) { }

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

  toggle(relay) {
    
  }

}
