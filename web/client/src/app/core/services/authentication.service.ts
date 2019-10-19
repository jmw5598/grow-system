import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

import { Credentials, Token } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticated: boolean = false;
  private _authenticatedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._authenticated);
  public isAuthenticated = this._authenticatedSource.asObservable();

  private _environment = environment;

  constructor(private _http: HttpClient, private _router: Router) {}

  login(credentials: Credentials): Observable<Token> {
    return this._http.post<Token>(`${this._environment.auth.baseUrl}/tokens`, credentials)
      .pipe(map(data => {
        this.token = new Token(data.token);
        this.authenticated = true;
        return data;
      }))
  }

  logout() {
    this.authenticated = false;
    localStorage.clear();
    this._router.navigate(['login']);
  }

  get token(): Token {
    let value = localStorage.getItem('token');
    return value ? JSON.parse(value) : new Token('');
  }

  set token(token: Token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  set authenticated(authenticated: boolean) {
    this._authenticated = authenticated;
    this._authenticatedSource.next(this._authenticated);
  }

}
