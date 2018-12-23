'use strict'

const mqtt = require('mqtt');
const MqttRouter = require('./mqtt.router');

class MqttGateway {

  constructor() {}

  init(config) {
    this.config = config;
    this.client = mqtt.connect(this.config.system.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.system.topics.subscriptions));
    this.client.on('message', (topic, message) => MqttRouter.inbound(topic, message.toString()));
    MqttRouter.init(this.client);
  }

  outbound(topic, message) {
    MqttRouter.outbound(topic, message);
  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => this.client.subscribe(e, this.config.options));
  }

}

module.exports = new MqttGateway();
