import { Observable } from 'rxjs';
import { Logger, IMessageService, MqttGateway, MqttMessage } from '@grow/common';

export class WebOutboundMessageService implements IMessageService {
  private _mqttGateway: MqttGateway;
  private _logger: Logger;

  constructor(channel: Observable<MqttMessage>) {
    this._mqttGateway = MqttGateway.getInstance();
    this._logger = new Logger(this.constructor.name);
    channel.subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    const routedTopic = `web/node/event/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    this._mqttGateway.outbound(outbound);
    this._logger.debug(`Outbound to web : ${outbound.topic}`);
  }
}
