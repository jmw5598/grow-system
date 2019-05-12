'use strict';

const ApplicationContext = require('./application.context');
const MqttGateway = require('./messaging').MqttGateway;
const MqttMessage = require('./messaging/models').MqttMessage;

class System {

  constructor() {}

  setup(config) {
    ApplicationContext.setItem('config', config);
    MqttGateway.setup(config.mqtt);
  }

  start() {
    const registrationRequest = new MqttMessage('node/0/register', { message: 'Regsiter your node' });
    MqttGateway.outbound(registrationRequest);
  }

}

module.exports = new System();
