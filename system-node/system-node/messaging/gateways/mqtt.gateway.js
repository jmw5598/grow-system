'use strict';

const Rx = require('rxjs');
const mqtt = require('mqtt');
const { MqttMessage, Logger } = require('@grow/common');

class MqttGateway {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    this.routes = {};
    this.routes.inbound = { source: new Rx.Subject() };
    this.routes.inbound.channel = this.routes.inbound.source.asObservable();
  }

  setup(config) {
    this.config = config;
    this.client = mqtt.connect(this.config.system.mqtt.gateway.uri);
    this.client.on('connect', () => this.subscriptions(this.config.system.mqtt.topics.subscriptions));
    this.client.on('message', (topic, message) => this.inbound(topic, JSON.parse(message.toString())));
  }

  inbound(topic, message) {
    this.logger.debug(`[MqttGateway] New inbound message: ${topic}`);
    let routedTopic = topic.split("/");
    routedTopic.splice(1, 1);
    routedTopic = routedTopic.join('/');
    const payload = new MqttMessage(routedTopic, message);
    this.routes.inbound.source.next(payload);
  }

  outbound(message) {
    this.logger.debug(`New outbound message: ${message.topic}`);
    const payload = JSON.stringify(message.message);
    this.client.publish(message.topic, payload);
  }

  subscriptions(subscriptions) {
    subscriptions.forEach(e => {
      let topic = e;
      if(e.includes('{id}')) {
        let segments = e.split("{id}");
        topic = `${segments[0]}${this.config.node.id}${segments[1]}`
      }
      this.client.subscribe(topic, this.config.system.mqtt.options);
    })
  }

}

module.exports = new MqttGateway();
