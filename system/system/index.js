'use strict';

const SystemContext = require('./system.context');
const { MqttGateway } = require('./messaging');

class System {

  constructor() {}

  setup(config) {
    this.config = config
  }

  start() {
    SystemContext.init(this.config);
    MqttGateway.init(this.config.mqtt);
    // Have a topic to request node to register on bootupd??
    // If system loads after nodes, nodes should be notified to register.
  }

}

module.exports = new System();
