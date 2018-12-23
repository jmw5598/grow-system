'use strict';

const { MqttGateway } = require('./messaging');

class System {

  constructor() {}

  setup(config) {
    this.config = config
  }

  start() {
    MqttGateway.init(this.config.mqtt);
  }

}

module.exports = new System();
