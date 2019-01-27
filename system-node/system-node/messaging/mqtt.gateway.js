'use strict';

const mqtt = require('mqtt');
const MqttRouter = require('./mqtt.router');

class MqttGateway {

  constructor() {}

  init(config) {
    this.config = config;
    this.client = mqtt.connect(this.config.system.mqtt.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.system.mqtt.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inbound(topic, message.toString()));
  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => {
      let topic = e.split("{id}");
      console.log(`Subscribing to: ${topic[0]}${this.config.id}${topic[1]}`);
      this.client.subscribe(
        `${topic[0]}${this.config.id}${topic[1]}`, this.config.system.mqtt.options);
    })
  }

  inbound(topic, message) {
    MqttRouter.inbound(topic, message);
  }

  outbound(topic, message) {
    const payload = JSON.stringify(message);
    this.client.publish(topic, payload);
  }

}

module.exports = new MqttGateway();
