import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FadeAnimation } from '@shared/animations';

import { ModalOptions, ModalType, ModalSize } from '@shared/components';
import { ToasterService, ToastType } from '@core/components';
import { RelayService } from '@core/services';

import { Store } from '@ngrx/store';
import { AppState, SystemNode, RelayComponent, TemperatureHumidityComponent } from '@core/store';

@Component({
  selector: 'gs-system-node',
  templateUrl: './system-node.component.html',
  styleUrls: ['./system-node.component.scss'],
  animations: [FadeAnimation]
})
export class SystemNodeComponent implements OnInit {

  public options: ModalOptions = {
    isShown: false,
    type: ModalType.DEFAULT,
    size: ModalSize.MEDIUM
  }

  public node: SystemNode;
  public relays: RelayComponent[];
  public tempHumSensors: TemperatureHumidityComponent[];

  constructor(
    private _route: ActivatedRoute,
    private _relayService: RelayService,
    private _toaster: ToasterService,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    
    this._store.select(e => e.nodes)
      .subscribe(e => this.node = e.find(n => n.id === id));

    this._store.select(e => e.relays)
      .subscribe(e => {
        this.relays =  e.filter(c => c.nodeId === id);
        console.log("relays", e); 
      });

    // e in sub is undefined to start when it should be []?????
    this._store.select(e => e.tempHumSensors)
      .subscribe(e => this.tempHumSensors = e.filter(s => s.nodeId === id));
  }

  showModal() {
    this.options.isShown = true;
  }

}
