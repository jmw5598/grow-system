import { Observable } from 'rxjs';
import { MqttMessage } from '../models/mqtt-message.model';

export interface IPubSubChannel {
  sendMessage(message: MqttMessage): void;
  receivedMessage(): Observable<MqttMessage>;
}
