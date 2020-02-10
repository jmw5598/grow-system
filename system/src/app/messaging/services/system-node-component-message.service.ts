import { Observable } from 'rxjs';
import { MqttGateway, IPubSubChannel, MqttMessage, IMessageService } from '@grow/common';

export class SystemNodeComponentMessageService implements IMessageService {
  private _mqttGateway: MqttGateway;

  constructor(channel: IPubSubChannel) {
    this._mqttGateway = MqttGateway.getInstance();
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    const routedTopic = `node/${message.message.node.id}/component/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message.payload);
    this._mqttGateway.outbound(outbound);
  }
}
