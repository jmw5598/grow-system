'use strict';

const Rx = require('rxjs');
const mqtt = require('mqtt');

class MqttGateway {

  /*
    TODO:
    Pull configuration file from SystemContext instead of being passed in via
    init() function?
  */

  constructor() {
    this.inboundSource = new Rx.Subject();
    this.inbound = this.inboundSource.asObservable();
  }

  init(config) {
    this.config = config;
    this.client = mqtt.connect(this.config.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inboundMessage(topic, message.toString()));
  }

  inboundMessage(topic, message) {
    let payload = { topic: topic, message: message };
    this.inboundSource.next(payload);
  }

  outbound(topic, payload) {

  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => {
      this.client.subscribe(e, this.config.options)
    });
  }

}

module.exports = new MqttGateway();
