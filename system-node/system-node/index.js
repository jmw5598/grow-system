'use strict';

const { MqttGateway } = require('./messaging');
const { MqttMessage } = require('./messaging/models');
const { RelayAction, TemperatureHumidityAction } = require('./actions');
const SystemNodeContext = require('./system-node.context');

class SystemNode {

  constructor() {}

  setup(config) {
    this.config = config;
  }

  start() {
    MqttGateway.init(this.config);
    // TODO: Fix this so it works! (registering nodes on bootup and when system sends a reqeust to check in)
    const registration = new MqttMessage('system/system-node/event/register', this.config.node);
    MqttGateway.outbound(registration);
    this.config.node.components.sensors.forEach(sensor =>
        SystemNodeContext.register(new TemperatureHumidityAction(sensor)));
    this.config.node.components.relays.forEach(relay =>
        SystemNodeContext.register(new RelayAction(relay)));
  }

}

module.exports = new SystemNode();
