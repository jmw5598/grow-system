import { Observable } from 'rxjs';
import { MqttMessage } from '../models/mqtt-message.model';

export interface ISendable {
  sendMessage(message: MqttMessage): void;
  getChannel(channelName: string): Observable<MqttMessage>;
}
