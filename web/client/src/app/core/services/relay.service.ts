import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommandRequest } from '../models';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RelayService {

  private _url: string;
  private _environment = environment;

  constructor(private _http: HttpClient) {
    this._url = `${this._environment.api.baseUrl}/system/node`;
  }

  toggle(node: string, relay: string, command: CommandRequest):Observable<boolean> {
    return this._http.patch(`${this._url}/${node}/relay/${relay}/command`, command)
      .pipe(map(res => { return true; }));
  }

}
