import { Observable } from 'rxjs';
import { ApplicationContext, IMessageService, MqttGateway, MqttMessage } from '@grow/common';
import { ApplicationContextKeys } from '../../application.constants';

// @@@ TODO Clean this shit up.
export class SystemNodeRegistrationService implements IMessageService {
  private _applicationContext: ApplicationContext;
  private _mqttGateway: MqttGateway;
  private _nodes: any;

  constructor(channel: Observable<MqttMessage>) {
    this._applicationContext = ApplicationContext.getInstance();
    this._mqttGateway = MqttGateway.getInstance();
    this._nodes = [];
    this._applicationContext.getItem(ApplicationContextKeys.NODES).subscribe((nodes: any) => (this._nodes = nodes));
    channel.subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    if (this._nodes) {
      const found = this._nodes.find((node: any) => node.id === message.message.id);
      if (found) {
        Object.assign(found, message.message);
        Object.assign(found.status, { state: 'online', timestamp: new Date() });
      } else {
        const node = message.message;
        node.status = { state: 'online', timestamp: new Date() };
        this._nodes.push(message);
      }
    } else {
      const node = message.message;
      node.status = { state: 'online', timestamp: new Date() };
      this._nodes = [];
      this._nodes.push(message.message);
    }

    this._applicationContext.setItem('nodes', this._nodes);
  }
}
