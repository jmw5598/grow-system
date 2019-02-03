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
    this.client.on('message', (topic, message) => this.inbound(topic, message.toString()));
  }

  inbound(topic, message) {
    let payload = new MqttMessage(topic, message);
    this.inboundChannelSource.next(payload);
  }

  outbound(message) {
    console.log("new outboudn message");
    this.client.publish('node/event', message.message);
  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => {
      this.client.subscribe(e, this.config.options)
    });
  }

}

module.exports = new MqttGateway();
