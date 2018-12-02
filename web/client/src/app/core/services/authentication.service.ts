import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated: boolean = false;
  private authenticatedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated);
  public authenticated = this.authenticatedSource.asObservable();

  constructor(
    private _router: Router
  ) {}

  login() {
    this.isAuthenticated = true;
    this.authenticatedSource.next(this.isAuthenticated);
    this._router.navigate(['dashboard']);
  }

  logout() {
    this.isAuthenticated = false;
    this.authenticatedSource.next(this.isAuthenticated);
    this._router.navigate(['login']);
  }

}
