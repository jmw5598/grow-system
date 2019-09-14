import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToasterOptions } from './toaster-options.model';
import { ToasterService } from './toaster.service';
import { ToastLocation } from './toast-location.enum';
import { ToastMessage } from './toast-message.model';

@Component({
  selector: 'gs-core-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit, OnDestroy {

  @Input()
  public options: ToasterOptions;
  public messages: ToastMessage[];

  private _subscription: Subscription;

  private readonly _pushLocations: ToastLocation[] = [
    ToastLocation.LOWER_LEFT, ToastLocation.BOTTOM_CENTER, ToastLocation.LOWER_RIGHT];

  constructor(private _toaster: ToasterService) {
    this.options = new ToasterOptions(ToastLocation.LOWER_RIGHT);
    this.messages = [];
  }

  ngOnInit() {
    this._subscription = this._toaster.messages
      .subscribe(message => this._displayToast(message));
  }

  ngOnDestroy() {
    if(this._subscription)
      this._subscription.unsubscribe();
  }

  dismiss(message: ToastMessage) {
    message.isShown = false;
    this._cleanToaster();
  }

  private _displayToast(message: ToastMessage) {

    let location = this.options.location;
    let m = this.messages.slice();

    if (this._pushLocations.indexOf(location) > -1) {
      m.push(message);
    } else {
      m.unshift(message);
    }

    this.messages = m;
    this._setDismissTimer(message);
    this._cleanToaster();
  }

  private _setDismissTimer(message) {
    setTimeout(() => {
      message.isShown = false;
      this._cleanToaster();
    }, message.duration);
  }

  private _cleanToaster() {
    this.messages = this.messages.slice().filter(e => e.isShown);
  }
  
}
