import { MqttMessage } from '../models/mqtt-message.model';

export interface IRoutable {
  routeMessage(message: MqttMessage): void;
}
