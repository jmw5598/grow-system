import { Injectable, NgZone, OnDestroy, Inject } from '@angular/core';
import { EventSourcePolyfill } from 'ng-event-source';
import { BehaviorSubject } from 'rxjs';

import { GS_CORE_CONFIG } from '../gs-core.token';
import { GsCoreModuleConfig } from '../gs-core.config';

import { AuthenticationService } from './authentication.service';

import { Token } from '../models';

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

  public message = this._messageSource.asObservable();

  constructor(
    @Inject(GS_CORE_CONFIG) private _config: GsCoreModuleConfig,
    private _authenticationService: AuthenticationService
  ) {
    this._base = this._config.api.baseUrl;
    this.zone = new NgZone({enableLongStackTrace: false});
    this._authenticationService.isAuthenticated
      .subscribe(isAuthenticated => {
        this._isAuthenticated = isAuthenticated;
        if(isAuthenticated)
          this.init();
        else
          this.destroy();
      })
  }

  private onMessage(message) {
    this._lastestMessage = message;
    this._messageSource.next(this._lastestMessage);
  }

  private init() {
    this._eventSource = new EventSourcePolyfill(`${this._base}/events`, this.createHeaders());
    this._eventSource.onopen = () => console.log("event source opened");
    this._eventSource.onerror = () => console.log("event source error");
    this._eventSource.onmessage = (message) => this._messageSource.next(JSON.parse(message.data));
  }

  private destroy() {
    if(this._eventSource)
      this._eventSource.close();
  }

  private createHeaders() {
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
    this.destroy();
  }

}
