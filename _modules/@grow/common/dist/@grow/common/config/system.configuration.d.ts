import { MqttConfiguration } from './mqtt.configuration';
export declare class SystemConfiguration {
    name: string;
    description: string;
    mqtt: MqttConfiguration;
    constructor(name: string, description: string, mqtt: MqttConfiguration);
}
