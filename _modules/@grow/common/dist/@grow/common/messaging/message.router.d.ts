import { MqttMessage } from './models/mqtt-message.model';
import { MessageRoute } from './models/message-route.model';
export declare class MessageRouter {
    routes: any;
    constructor();
    setup(routes: MessageRoute[]): void;
    route(message: MqttMessage): void;
}
