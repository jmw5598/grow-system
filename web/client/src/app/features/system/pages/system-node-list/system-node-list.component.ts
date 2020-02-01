import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, SystemNode, AddSystemNodeAction, UpdateSystemNodeAction } from '@core/store';
import { FadeAnimation } from '@shared/animations';

@Component({
  selector: 'gs-system-node-list',
  templateUrl: './system-node-list.component.html',
  styleUrls: ['./system-node-list.component.scss'],
  animations: [FadeAnimation]
})
export class SystemNodeListComponent implements OnInit {

  public nodes$: Observable<SystemNode[]>;
  
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.nodes$ = this._store.select(e => e.nodes);
    console.log(this.nodes$);
  }

  update() {
    let node: SystemNode = new SystemNode();

    this._store.dispatch(new AddSystemNodeAction(node));
    this._store.dispatch(new UpdateSystemNodeAction(node));
  }

}
