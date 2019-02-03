'use strict';

const Rx = require('rxjs');
const mqtt = require('mqtt');

const { MqttMessage } = require('../models');

class MqttGateway {

  constructor() {
    this.inboundChannelSource = new Rx.Subject();
    this.inboundChannel = this.inboundChannelSource.asObservable();
  }

  init(config) {
    this.config = config;
    this.client = mqtt.connect(this.config.system.mqtt.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.system.mqtt.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inbound(topic, message.toString()));
  }

  inbound(topic, message) {
    let payload = new MqttMessage(topic, message);
    this.inboundChannelSource.next(payload);
  }

  outbound(message) {
    const payload = JSON.stringify(message.message);
    this.client.publish(message.topic, payload);
  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => {
      let topic = e.split("{id}");
      this.client.subscribe(
        `${topic[0]}${this.config.id}${topic[1]}`, this.config.system.mqtt.options);
    })
  }

}

module.exports = new MqttGateway();
