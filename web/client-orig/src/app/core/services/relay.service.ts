import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { CommandRequest } from '@shared/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RelayService {

  private _base: string = environment.api.baseUrl;
  private _url: string = `${this._base}/system/node`

  constructor(private _http: HttpClient) { }

  toggle(node: string, relay: string, command: CommandRequest):Observable<boolean> {
    return this._http.patch(`${this._url}/${node}/relay/${relay}/command`, command)
      .pipe(map(res => { return true; }));
  }

}
