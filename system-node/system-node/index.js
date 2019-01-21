'use strict';

const { MqttGateway } = require('./messaging/');

class SystemNode {

  constructor() {
    console.log("Inside systemnode constructor");
  }

  setup(config) {
    this.config = config;
    // configure system node components (sensors, relays)
    // create a factory type class to build components and their logic
    // (threshold, interval etc,) based on a config.s
  }

  start() {
    MqttGateway.init(this.config);
    MqttGateway.outbound(this.config.system.mqtt.topics.publish.register, this.config.node);
  }

}

module.exports = new SystemNode();
