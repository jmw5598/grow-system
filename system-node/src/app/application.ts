import { ActionFactory } from './action.factory';
import {
  Component,
  GlobalConfiguration,
  MqttMessage,
  MqttGateway,
  ApplicationContext,
  IRoutable,
  IMessageService,
} from '@grow/common';
import { ApplicationContextKeys } from './application.constants';
import { configureMessageRouters, configureMessageServices } from './messaging';

export class SystemNode {
  private _applicationContext: ApplicationContext;
  private _gateway: MqttGateway;
  private _messageRouting: IRoutable;
  private _messageServices: IMessageService[];

  constructor(private _config: GlobalConfiguration) {
    this._applicationContext = ApplicationContext.getInstance();
    this._applicationContext.setItem(ApplicationContextKeys.CONFIG, this._config);
    this._gateway = MqttGateway.getInstance();
    this._messageRouting = configureMessageRouters();
    this._messageServices = configureMessageServices();
    this._gateway.setup(this._config.mqtt, this._messageRouting);
  }

  public start(): void {
    // @@@ TODO get rid of this magic string!
    const registration = new MqttMessage('system/node/register', this._config.node);
    const actions: any = [];

    if (this._config.node) {
      this._config.node.components.forEach((a: Component) =>
        actions.push(ActionFactory.create(a.type.model, this._config.node, a)),
      );
    }
    // @@@ TODO get rid of this magic string??? Create enum????
    // REPALCE EVERYWHERE
    this._applicationContext.setItem(ApplicationContextKeys.ACTIONS, actions);
    this._gateway.outbound(registration);
  }
}
