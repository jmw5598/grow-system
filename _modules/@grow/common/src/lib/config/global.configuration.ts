import { SystemConfiguration } from './system.configuration';
import { SystemNodeConfiguration } from './system-node-configuration';
import { MqttConfiguration } from './mqtt.configuration';

export class GlobalConfiguration {
  constructor(
    public system: SystemConfiguration,
    public mqtt: MqttConfiguration,
    public node: SystemNodeConfiguration,
  ) {}
}
