import { MqttMessage } from '../models/mqtt-message.model';

export interface IMessageService {
  processMessage(message: MqttMessage): void;
}
