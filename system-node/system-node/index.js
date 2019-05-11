'use strict';

const ApplicationContext = require('./application.context');
const { MqttGateway } = require('./messaging');
const { MqttMessage } = require('./messaging/models');
const { RelayAction, TemperatureHumidityAction } = require('./actions');

class SystemNode {

  constructor() {}

  setup(config) {
    this.config = config;
    // TODO: Initialize node attribute in config with unique id if not already initialized.
    // This if for new nodes only.
    ApplicationContext.setItem('config', config);
    MqttGateway.setup(config);
  }

  start() {
    const registration = new MqttMessage('system/node/register', this.config.node);
    const actions = [];

    // TODO: Not sure if this is the best place to initialize all the actions??
    this.config.node.components.forEach(a => {
      switch(a.type.model) {
        case 'SRD05':
          actions.push(new RelayAction(a));
          break;
        case 'DHT22':
          actions.push(new TemperatureHumidityAction(a));
          break;
        default: break;
      }
    });

    ApplicationContext.setItem('actions', actions);
    MqttGateway.outbound(registration);
  }

}

module.exports = new SystemNode();
