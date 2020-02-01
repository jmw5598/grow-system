import { TemperatureHumidityComponent } from '../models/rpi-components/temperature-humidity-component.model';
import { TemperatureHumidityComponentAction, TemperatureHumidityComponentActionTypes } from '../actions/temperature-humidity.actions';

const initialState = [];

export function TemperatureHumidityComponentReducer(state: TemperatureHumidityComponent[] = initialState, action: TemperatureHumidityComponentAction) {
  switch(action.type) {
    case TemperatureHumidityComponentActionTypes.ADD_SENSOR:
      return [];
    case TemperatureHumidityComponentActionTypes.UPDATE_SENSOR:
      const current = state.find(e => e.id === action.payload.id);
      if (current) 
        Object.assign(current, action.payload);
      else 
        state.push(action.payload);
      return [...state];
    default:
      return state;
  }
}