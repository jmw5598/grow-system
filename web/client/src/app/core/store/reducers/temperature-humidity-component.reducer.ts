import { TemperatureHumidityComponent } from '../models/rpi-components/temperature-humidity-component.model';
import { TemperatureHumidityComponentAction, TemperatureHumidityComponentActionTypes } from '../actions/temperature-humidity.actions';

const initialState = [];

export function TemperatureHumidityComponentReducer(state: TemperatureHumidityComponent[] = initialState, action: TemperatureHumidityComponentAction) {
  switch(action.type) {
    case TemperatureHumidityComponentActionTypes.ADD_SENSOR:
      console.log(action);
      return [];
    case TemperatureHumidityComponentActionTypes.UPDATE_SENSOR:
      console.log(action);
      return [];
    default:
      return state;
  }
}