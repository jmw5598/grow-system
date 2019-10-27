import { SystemNode } from './models/system-node.model';
import { RelayComponent } from './models/rpi-components/relay-component.model';
import { TemperatureHumidityComponent } from './models/rpi-components/temperature-humidity-component.model';

export class AppState {
  readonly nodes: SystemNode[];
  readonly relays: RelayComponent[];
  readonly tempHumSensors: TemperatureHumidityComponent[];
}