import { Component, OnInit } from '@angular/core';

import { AuthenticationService, SseService } from '@core/services';
import { ToasterOptions, ToastLocation } from '@core/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isAuthenticated: boolean;
  public toasterOptions: ToasterOptions = new ToasterOptions(ToastLocation.LOWER_RIGHT);
  
  constructor(
    private _authenticationService: AuthenticationService,
    private _sseService: SseService
  ) {}

  ngOnInit() {
    this._authenticationService.isAuthenticated
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);

    this._sseService.message.subscribe(message => console.log(message));
  }

}
