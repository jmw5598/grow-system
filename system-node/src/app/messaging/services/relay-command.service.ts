import { ApplicationContext, MqttMessage, IMessageService, IPubSubChannel } from '@grow/common';
import { RelayAction } from '../../actions/relay.action';
import { ApplicationContextKeys } from '../../application.constants';

export class RelayCommandService implements IMessageService {
  private _actions: any;
  private _applicationContext: ApplicationContext;

  constructor(channel: IPubSubChannel) {
    this._applicationContext = ApplicationContext.getInstance();
    this._applicationContext
      .getItem(ApplicationContextKeys.ACTIONS)
      .subscribe((actions: any) => (this._actions = actions));

    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    if (!this._actions || !message.message.payload.state) {
      return;
    }

    const relay = this._actions.find((action: any) => action.config.id === message.message.component.id);

    if (relay && relay instanceof RelayAction) {
      relay.toggle(message.message.payload.state);
    }
  }
}
