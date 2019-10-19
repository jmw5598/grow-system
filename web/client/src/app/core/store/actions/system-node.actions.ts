import { Action } from '@ngrx/store';
import { SystemNode } from '../models/system-node.model';

export enum SystemNodeActionTypes {
  ADD_SYSTEM_NODE = '[SYSTEM-NODE] Add System Node',
  UPDATE_SYSTEM_NODE = '[SYSTEM-NODE] Update System Node'
}

export class AddSystemNodeAction implements Action {
  public readonly type = SystemNodeActionTypes.ADD_SYSTEM_NODE;
  constructor(public payload: SystemNode) {}
}

export class UpdateSystemNodeAction implements Action {
  public readonly type = SystemNodeActionTypes.UPDATE_SYSTEM_NODE;
  constructor(public payload: SystemNode) {}
}


export type SystemNodeAction = AddSystemNodeAction | UpdateSystemNodeAction;