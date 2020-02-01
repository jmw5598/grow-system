import { MqttConfiguration } from './mqtt.configuration';

export class SystemConfiguration {
  constructor(
    public name: string,
    public description: string,
    public mqtt: MqttConfiguration
  ) {}
}