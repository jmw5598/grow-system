'use strict';

require('./messaging');
require('./utilities');
require('./services');
require('./actions');

const ApplicationContext = require('./application.context');
const MqttGateway = require('./messaging').MqttGateway;
const MqttMessage = require('./messaging/models').MqttMessage;
const ActionFactory = require('./action.factory');

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
       actions.push(ActionFactory.create(a.type.model, this.config.node, a)));

    ApplicationContext.setItem('actions', actions);
    MqttGateway.outbound(registration);
  }

}

module.exports = new SystemNode();
