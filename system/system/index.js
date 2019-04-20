'use strict';

const ApplicationContext = require('./application.context');
const MqttGateway = require('./messaging').MqttGateway;

class System {

  constructor() {}

  setup(config) {
    ApplicationContext.setItem('config', config);
    MqttGateway.setup(config.mqtt);
  }

  start() {
    // Have a topic to request node to register on bootupd??
    // If system loads after nodes, nodes should be notified to register.
  }

}

module.exports = new System();
