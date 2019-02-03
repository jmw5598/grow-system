'use strict';

const { MqttMessage } = require('../models');
const { MqttGateway } = require('../gateways');
const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.init();
    this.systemNodeEventChannelSource = new Rx.Subject();
    this.systemNodeEventChannel = this.systemNodeEventChannelSource.asObservable();
  }

  init() {
    MqttGateway.inboundChannel
      .subscribe(payload => this.route(payload));
  }

  route(message) {
    const [topic] = (payload.topic.split('/')).splice(1);
    const routedTopic = "";
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      default:
        this.systemNodeChannelSource.next(message);
        break;
    }

  }

}

module.exports = new MqttRouter();
