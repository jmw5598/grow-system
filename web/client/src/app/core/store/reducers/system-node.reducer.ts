import { SystemNode } from '../models/system-node.model';
import { SystemNodeAction, SystemNodeActionTypes } from '../actions/system-node.actions';

const initialState = [];

export function SystemNodeReducer(state: SystemNode[] = initialState, action: SystemNodeAction) {
  switch(action.type) {
    case SystemNodeActionTypes.ADD_SYSTEM_NODE:
      console.log(action);
      return [];
    case SystemNodeActionTypes.UPDATE_SYSTEM_NODE:
      console.log(action); 
      return [action.payload];
    default: 
      return state;
  }
}