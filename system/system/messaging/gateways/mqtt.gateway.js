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
    this.client = mqtt.connect(this.config.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inbound(topic, JSON.parse(message.toString())));
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
      this.client.subscribe(e, this.config.options)
    });
  }

}

module.exports = new MqttGateway();
