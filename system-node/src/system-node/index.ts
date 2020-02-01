require('./messaging');
require('./services');
require('./actions');

import { ActionFactory } from './action.factory';
import { Component, GlobalConfiguration, MqttMessage, MqttGateway, ApplicationContext } from '@grow/common';

export class SystemNode {

  private _applicationContext: ApplicationContext;
  private _gateway: MqttGateway;

  constructor(private _config: GlobalConfiguration) {
    this._applicationContext = ApplicationContext.getInstance();
    this._applicationContext.setItem('config', this._config);
    this._gateway = MqttGateway.getInstance();
    this._gateway.setup(this._config.system.mqtt);
  }

  start() {
    const registration = new MqttMessage('system/node/register', this._config.node);
    const actions: any = [];

    this._config.node.components.forEach((a: Component) => 
       actions.push(ActionFactory.create(a.type.model, this._config.node, a)));

    this._applicationContext.setItem('actions', actions);
    this._gateway.outbound(registration);
  }

}
