import { RelayAction } from './relay.action';
import { HumidityAction } from './humidity.action';
import { ProximityAction } from './proximity.action';
import { TemperatureHumidityAction } from './temperature-humidity.action';
import { TemperatureAction } from './temperature.action';

export type ComponentActionType = 
    RelayAction | 
    HumidityAction |
    ProximityAction |
    TemperatureHumidityAction |
    TemperatureAction;