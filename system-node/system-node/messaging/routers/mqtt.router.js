'use strict';

const { MqttMessage } = require('../models');
const { MqttGateway } = require('../gateways');
const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.init();
    this.systemNodeActionChannelSource = new Rx.Subject();
    this.systemNodeActionChannel = this.systemNodeActionChannelSource.asObservable();
    MqttGateway.inboundChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/').slice(2);
    const routedTopic = payload.topic.split('/').slice(3).join('/');
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'action':
        this.systemNodeActionChannelSource.next(message);
        break;
      default:
        this.systemNodeActionChannelSource.next(message);
        break;
    }
  }

}

module.exports = new MqttRouter();
