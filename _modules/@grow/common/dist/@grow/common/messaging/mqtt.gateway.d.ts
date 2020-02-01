import { MqttMessage } from '../messaging/models/mqtt-message.model';
import { MqttConfiguration } from '../config/mqtt.configuration';
export declare class MqttGateway {
    private static instance;
    routes: any;
    private _config;
    private _logger;
    private _client;
    private constructor();
    static getInstance(): MqttGateway;
    setup(config: MqttConfiguration): void;
    inbound(topic: string, message: any): void;
    outbound(message: MqttMessage): void;
    private _subscriptions;
}
