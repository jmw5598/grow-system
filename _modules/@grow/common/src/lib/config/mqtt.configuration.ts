import { MqttGatewayConfiguration } from './mqtt-gateway.configuration';
import { MqttOptionsConfiguration } from './mqtt-options.configuration';
import { MqttTopicsConfiguration } from './mqtt-topics.configuration';

export class MqttConfiguration {
  constructor(
    public gateway: MqttGatewayConfiguration,
    public options: MqttOptionsConfiguration,
    public topics: MqttTopicsConfiguration
  ) {}
}