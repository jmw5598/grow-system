'use strict';

const { MqttGateway } = require('./messaging/');
const { RelayAction, TemperatureHumidityAction } = require('./actions');
const SystemNodeContext = require('./system-node.context');

class SystemNode {

  constructor() {}

  setup(config) {
    this.config = config;
  }

  start() {
    MqttGateway.init(this.config);
    MqttGateway.outbound(this.config.system.mqtt.topics.publish.register, this.config.node);
    this.config.node.components.sensors.forEach(sensor =>
        SystemNodeContext.register(new TemperatureHumidityAction(sensor)));
    this.config.node.components.relays.forEach(relay =>
        SystemNodeContext.register(new RelayAction(relay)));
  }

}

module.exports = new SystemNode();
