'use strict';

const ActionFactory = require('./actions').ActionFactory;
const ApplicationContext = require('./application.context');
const MqttGateway = require('./messaging').MqttGateway;
const MqttMessage = require('./messaging/models').MqttMessage;

require('./services');

class SystemNode {

  constructor() {}

  setup(config) {
    this.config = config;
    ApplicationContext.setItem('config', config);
    MqttGateway.setup(config);
  }

  start() {
    const registration = new MqttMessage('system/node/register', this.config.node);
    const actions = [];

    this.config.node.components.forEach(a => 
      this.actions.push(ActionFactorty.get(a.type.model, a)));

    ApplicationContext.setItem('actions', actions);
    MqttGateway.outbound(registration);
  }

}

module.exports = new SystemNode();
