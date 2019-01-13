'use strict';

const mqtt = require('mqtt');
const MqttRouter = require('./mqtt.router');

class MqttGateway {

  /*
    TODO:
    Pull configuration file from SystemContext instead of being passed in via
    init() function?
  */

  constructor() {}

  init(config) {
    this.config = config
    this.client = mqtt.connect(this.config.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inbound(topic, message.toString()));
    MqttRouter.init(this.client);
  }

  inbound(topic, message) {
    console.log("\nMqttGatewate::Message::" + new Date());
    MqttRouter.inbound(topic, message);
  }

  outbound(topic, payload) {
    console.log("MqttGateway::Outbound");
    MqttRouter.outbound(topic, payload);
  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => this.client.subscribe(e, this.config.options));
  }

}

module.exports = new MqttGateway();
