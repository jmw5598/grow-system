import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AuthenticationService } from '@core/services';
import { Token } from '@shared/models';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const prefix = environment.auth.prefix;
    const token: Token = this._authenticationService.token;

    request = request.clone({
      setHeaders: {
        Authorization: `${prefix} ${token}`
      }
    });

    return next.handle(request);
  }

}
