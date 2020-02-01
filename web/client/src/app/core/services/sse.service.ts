import { Injectable, NgZone, OnDestroy, Inject } from '@angular/core';
import { EventSourcePolyfill } from 'ng-event-source';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

import { AuthenticationService } from './authentication.service';
import { EventMessageType } from '../models/event-message-type.enum';
import { EventMessage } from '../models/event-message.model';
import { ToasterService, ToastMessage, ToastType } from '../components';

import { Token } from '../models';
import { SystemNode } from '../store/models/system-node.model';
import { UpdateSystemNodeAction } from '../store/actions/system-node.actions';

import { environment } from '@env/environment';
import { UpdateRelayComponentAction } from '@core/store/actions/realy.actions';
import { RelayComponent, UpdateTemperatureHumidityComponentAction, TemperatureHumidityComponent } from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class SseService implements OnDestroy {

  private zone: NgZone;

  private _base: string;
  private _eventSource: EventSourcePolyfill; // replace with EventSource?
  private _isAuthenticated: boolean;
  private _lastestMessage: any = {};
  private _messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(this._lastestMessage);
  private _environment = environment;

  public message = this._messageSource.asObservable();

  constructor(
    private _store: Store<AppState>, 
    private _authenticationService: AuthenticationService,
    private _toasterService: ToasterService
  ) {
    this._base = this._environment.api.baseUrl;
    this.zone = new NgZone({enableLongStackTrace: false});
    this._authenticationService.isAuthenticated
      .subscribe(isAuthenticated => {
        this._isAuthenticated = isAuthenticated;
        if(isAuthenticated)
          this._init();
        else
          this._destroy();
      })
  }

  private onMessage(message) {
    this._lastestMessage = message;
    this._messageSource.next(this._lastestMessage);
  }

  private _init() {
    this._eventSource = new EventSourcePolyfill(`${this._base}/events`, this._createHeaders());
    this._eventSource.onopen = () => console.log("event source opened");
    this._eventSource.onerror = () => console.log("event source error");
    this._eventSource.onmessage = (message) => this._process(JSON.parse(message.data));
  }

  private _process(message: EventMessage) {
    switch(message.event) {
      case EventMessageType.NODE_STATE_CHANGED:
        this._store.dispatch(
          new UpdateSystemNodeAction(message.payload as SystemNode));
        break;
      
      case EventMessageType.NOTIFICATION:
        // Need to check NoticationType and use appropriate toast type.
        this._toasterService.toast(null, message.payload.message, ToastType.DANGER, 2000);
        break;
      
      case EventMessageType.RELAY_STATE_CHANGED:
        this._store.dispatch(
          new UpdateRelayComponentAction(message.payload as RelayComponent));
        break;
      
      case EventMessageType.TEMPHUM_STATE_CHANGED:
        this._store.dispatch(
          new UpdateTemperatureHumidityComponentAction(message.payload as TemperatureHumidityComponent));
        break;
      
      case EventMessageType.SYSTEM_CURRENT_STATE:
        console.log('new system current state event');
        break;
      
        default:
        console.log('received unrecognized event');
        break;
    }
  }

  private _destroy() {
    if(this._eventSource)
      this._eventSource.close();
  }

  private _createHeaders() {
    let token: Token = JSON.parse(localStorage.getItem('token'));
    return {
      headers: {
        heartbeatTimeout: 5000,
        connectionTimeout: 5000,
        Authorization: `Bearer: ${token.token}`
      }
    }
  }

  ngOnDestroy() {
    this._destroy();
  }

}
