import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GS_CORE_CONFIG } from '../gs-core.token';
import { GsCoreModuleConfig } from '../gs-core.config';

import { CommandRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RelayService {

  private _url: string;

  constructor(
    @Inject(GS_CORE_CONFIG) private _config: GsCoreModuleConfig,
    private _http: HttpClient
  ) {
    this._url = `${this._config.api.baseUrl}/system/node`;
  }

  toggle(node: string, relay: string, command: CommandRequest):Observable<boolean> {
    return this._http.patch(`${this._url}/${node}/relay/${relay}/command`, command)
      .pipe(map(res => { return true; }));
  }

}
