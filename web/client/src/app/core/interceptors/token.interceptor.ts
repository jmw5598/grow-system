import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AuthenticationService } from '@core/services';
import { Token } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: Token = this._authenticationService.token;
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authenticationService.token}`
      }
    });
    return next.handle(request);
  }

}
