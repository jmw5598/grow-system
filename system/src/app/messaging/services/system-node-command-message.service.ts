import { Observable } from 'rxjs';
import { IMessageService, MqttGateway, MqttMessage } from '@grow/common';

export class SystemNodeCommandMessageRouter implements IMessageService {
  private _mqttGateway: MqttGateway;

  constructor(channel: Observable<MqttMessage>) {
    this._mqttGateway = MqttGateway.getInstance();
    channel.subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    const routedTopic = `node/${message.message.node.id}/command/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    this._mqttGateway.outbound(outbound);
  }
}
