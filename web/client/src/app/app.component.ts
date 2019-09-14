import { Component, OnInit } from '@angular/core';

<<<<<<< Updated upstream:web/client/src/app/app.component.ts
import { AuthenticationService } from '@core/services/authentication.service';
import { FadeAnimation } from '@shared/animations';
=======
import { AuthenticationService, SseService } from '@gs/core';
import { ToasterOptions, ToastLocation } from '@gs/core';
>>>>>>> Stashed changes:web/client/projects/applications/dashboard/src/app/app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [FadeAnimation]
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
