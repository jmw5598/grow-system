import { Observable } from 'rxjs';
import { IMessageService, IPubSubChannel, MqttGateway, MqttMessage } from '@grow/common';

export class SystemNodeCommandMessageService implements IMessageService {
  private _mqttGateway: MqttGateway;

  constructor(channel: IPubSubChannel) {
    this._mqttGateway = MqttGateway.getInstance();
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    const routedTopic = `node/${message.message.node.id}/command/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    this._mqttGateway.outbound(outbound);
  }
}
