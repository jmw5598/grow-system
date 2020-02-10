import { Observable } from 'rxjs';
import { ApplicationContext, IMessageService, IPubSubChannel, Logger, MqttGateway, MqttMessage } from '@grow/common';
import { ApplicationContextKeys } from '../../application.constants';

// @@@ TODO Clean this mess up!!
export class SystemNodeStatusService implements IMessageService {
  private _applicationContext: ApplicationContext;
  private _mqttGateway: MqttGateway;
  private _logger: Logger;
  private _nodes: any;
  private _interval: any;

  constructor(channel: IPubSubChannel) {
    this._applicationContext = ApplicationContext.getInstance();
    this._mqttGateway = MqttGateway.getInstance();
    this._logger = new Logger(this.constructor.name);
    this._nodes = [];
    this._applicationContext.getItem(ApplicationContextKeys.NODES).subscribe((nodes: any) => (this._nodes = nodes));
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
    this._checkHealth();
  }

  public processMessage(message: MqttMessage): void {
    if (!this._nodes) return;

    const found = this._nodes.find((node: any) => (node.id = message.message.payload.id));

    if (found) {
      found.status = message.message.payload.status;
      found.details = message.message.payload.details;
      this._applicationContext.setItem(ApplicationContextKeys.NODES, this._nodes);
    } else {
      this._logger.warn(`Could not find node to update status: ${message.message.id} - ${message.message.name}`);
    }

    const outbound = new MqttMessage('web/node/event/status', message.message);
    this._mqttGateway.outbound(outbound);
  }

  private _checkHealth(): void {
    this._interval = setInterval(() => {
      if (!this._nodes) return;

      this._nodes.forEach((node: any) => {
        const now = new Date();
        const threshold = new Date(node.status.timestamp);
        threshold.setSeconds(threshold.getSeconds() + 10);

        if (threshold < now && node.status.state === 'online') {
          this._logger.warn(`Unresponsive node (${node.name} : ${node.status.timestamp})`);
          node.status = { state: 'offline', timestamp: new Date() };
          this._sendStatus(node);
          this._notify(node);
        }
      });
    }, 1000);
  }

  private _sendStatus(node: any): void {
    const message = {
      event: 'NODE_STATE_CHANGED',
      payload: {
        id: node.id,
        name: node.name,
        details: node.details,
        status: node.status,
      },
    };

    const outbound = new MqttMessage('web/node/event/status', message);
    this._mqttGateway.outbound(outbound);
  }

  private _notify(node: any): void {
    // NEED TO copy over event-message-type.model form system node for _sendStatus);
    // NEED TO create Noticiation type (INFO, SUCCESS, WARNING, DANGER)

    const message = {
      event: 'NOTIFICATION',
      payload: {
        type: 'DANGER',
        message: `System node, ${node.name}, is unresponsive!`,
      },
    };

    const outbound = new MqttMessage('web/node/event/notification', message);
    this._mqttGateway.outbound(outbound);
  }
}
