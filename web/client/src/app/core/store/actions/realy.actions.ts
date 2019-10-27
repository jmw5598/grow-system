import { Action } from '@ngrx/store';
import { RelayComponent } from '../models/rpi-components/relay-component.model';

export enum RelayComponentActionTypes {
  ADD_RELAY = '[RELAY] Add Relay',
  UPDATE_RELAY = '[RELAY] Update Relay'
}

export class AddRelayComponentAction implements Action {
  public readonly type = RelayComponentActionTypes.ADD_RELAY;
  constructor(public payload: RelayComponent) {}
}

export class UpdateRelayComponentAction implements Action {
  public readonly type = RelayComponentActionTypes.UPDATE_RELAY;
  constructor(public payload: RelayComponent) {}
}

export type RelayComponentAction = AddRelayComponentAction | UpdateRelayComponentAction;