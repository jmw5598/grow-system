import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@core/services';
import { Token } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token: Token = this._authenticationService.token;
    if (token.token) return true;
    this._router.navigate(['login']);
    return false;
  }

}
