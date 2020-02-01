import { MqttGatewayConfiguration } from './mqtt-gateway.configuration';
import { MqttOptionsConfiguration } from './mqtt-options.configuration';
import { MqttTopicsConfiguration } from './mqtt-topics.configuration';
export declare class MqttConfiguration {
    gateway: MqttGatewayConfiguration;
    options: MqttOptionsConfiguration;
    topics: MqttTopicsConfiguration;
    constructor(gateway: MqttGatewayConfiguration, options: MqttOptionsConfiguration, topics: MqttTopicsConfiguration);
}
