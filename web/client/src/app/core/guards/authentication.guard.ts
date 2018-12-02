import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  private isAuthenticated: boolean;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {
    this._authenticationService.authenticated
      .subscribe(authenticated => this.isAuthenticated = authenticated);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated) return true;
    this._router.navigate(['login']);
    return false;
  }

}
