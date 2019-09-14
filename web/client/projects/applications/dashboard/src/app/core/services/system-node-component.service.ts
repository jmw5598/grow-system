import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SystemNodeComponent } from '@gs/common';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemNodeComponentService {

  private _base: string = environment.api.baseUrl;

  constructor(private _http: HttpClient) { }

  create(nodeId: number, component: SystemNodeComponent) {
    const body = { command: 'create', payload: component };
    
    return this._http.post<any>(
      `${this._base}/system/node/${nodeId}/component`, body);
  }
}
