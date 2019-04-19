'use strict';

const Rx = require('rxjs');
const mqtt = require('mqtt');

const { MqttMessage } = require('../models');

class MqttGateway {

  constructor() {
    this.routes = {};
    this.routes.inbound = { source: new Rx.Subject() };
    this.routes.inbound.channel = this.routes.inbound.source.asObservable();
  }

  setup(config) {
    this.config = config;
    this.client = mqtt.connect(this.config.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inbound(topic, JSON.parse(message.toString())));
  }

  inbound(topic, message) {
    const routedTopic = topic.split('/').slice(1).join('/');
    const payload = new MqttMessage(routedTopic, message);
    this.routes.inbound.source.next(payload);
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
