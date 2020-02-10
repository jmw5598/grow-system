import { Observable } from 'rxjs';
import {
  ApplicationContext,
  EventMessage,
  EventMessageType,
  GlobalConfiguration,
  MqttGateway,
  MqttMessage,
  IMessageService,
  IPubSubChannel,
} from '@grow/common';
import { ApplicationContextKeys } from '../../application.constants';

export class SystemStatusService implements IMessageService {
  private _applicationContext: ApplicationContext;
  private _mqttGateway: MqttGateway;
  private _nodes: any;
  private _config: GlobalConfiguration;

  constructor(channel: IPubSubChannel) {
    this._applicationContext = ApplicationContext.getInstance();
    this._mqttGateway = MqttGateway.getInstance();
    this._config = {} as GlobalConfiguration;
    this._applicationContext.getItem(ApplicationContextKeys.NODES).subscribe((nodes: any) => (this._nodes = nodes));
    this._applicationContext
      .getItem(ApplicationContextKeys.CONFIG)
      .subscribe((config: GlobalConfiguration) => (this._config = config));
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    // TODO: Create current state of system.
    const systemState = { system: this._config.system, nodes: this._nodes };
    const event = new EventMessage(EventMessageType.SYSTEM_CURRENT_STATE, systemState);
    const outbound = new MqttMessage('web/system/event/status', event);
    this._mqttGateway.outbound(outbound);
  }
}
