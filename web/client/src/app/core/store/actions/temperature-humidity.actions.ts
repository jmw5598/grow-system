import { Action } from '@ngrx/store';
import { TemperatureHumidityComponent } from '../models/rpi-components/temperature-humidity-component.model';

export enum TemperatureHumidityComponentActionTypes {
  ADD_SENSOR = '[TEMPHUM] Add Sensor',
  UPDATE_SENSOR = '[TEMPHUM] Update Sensor'
}

export class AddTemperatureHumidityComponentAction implements Action {
  public readonly type = TemperatureHumidityComponentActionTypes.ADD_SENSOR;
  constructor(public payload: TemperatureHumidityComponent) {}
}

export class UpdateTemperatureHumidityComponentAction implements Action {
  public readonly type = TemperatureHumidityComponentActionTypes.UPDATE_SENSOR;
  constructor(public payload: TemperatureHumidityComponent) {}
}

export type TemperatureHumidityComponentAction = AddTemperatureHumidityComponentAction | UpdateTemperatureHumidityComponentAction;