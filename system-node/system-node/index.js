'use strict';

const ApplicationContext = require('./application.context');
const { MqttGateway } = require('./messaging');
const { MqttMessage } = require('./messaging/models');

class SystemNode {

  constructor() {}

  setup(config) {
    this.config = config;
    ApplicationContext.setItem('config', config);
    MqttGateway.setup(config);
  }

  start() {
    // TODO: Fix this so it works! (registering nodes on bootup and when system
    // sends a reqeust to check in)
    const registration = new MqttMessage('system/system-node/event/register', this.config.node);
    MqttGateway.outbound(registration);
  }

}

module.exports = new SystemNode();
