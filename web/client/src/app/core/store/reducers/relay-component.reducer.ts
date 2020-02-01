import { RelayComponent } from '../models/rpi-components/relay-component.model';
import { RelayComponentAction, RelayComponentActionTypes } from '../actions/realy.actions';


const initialState = [];

export function RelayComponentReducer(state: RelayComponent[] = initialState, action: RelayComponentAction) {
  switch(action.type) {
    case RelayComponentActionTypes.ADD_RELAY:
      return [];
    case RelayComponentActionTypes.UPDATE_RELAY:
      return [...state, action.payload];
    default:
      return state;
  }
}