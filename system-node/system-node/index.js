'use strict';

require('./messaging');
require('./services');
require('./actions');

const { MqttMessage } = require('@grow/common');

const ApplicationContext = require('./application.context');
const MqttGateway = require('./messaging').MqttGateway;
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
