import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated: boolean = false;
  private authenticatedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated);
  public authenticated = this.authenticatedSource.asObservable();

  constructor() {}

  login() {
    this.isAuthenticated = true;
    this.authenticatedSource.next(this.isAuthenticated);
  }

  logout() {
    this.isAuthenticated = false;
    this.authenticatedSource.next(this.isAuthenticated);
  }

}
