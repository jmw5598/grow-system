'use strict';

const { MqttMessage } = require('../models');
const { MqttGateway } = require('../gateways');
const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.init();
    this.systemChannelSource = new Rx.Subject();
    this.systemChannel = this.systemChannelSource.asObservable();
    this.systemNodeChannelSource = new Rx.Subject();
    this.systemNodeChannel = this.systemNodeChannelSource.asObservable();
  }

  init() {
    MqttGateway.inboundChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    let [event] = payload.topic.split('/');
    let routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    let message = new MqttMessage(routedTopic, payload.message);

    switch(event) {
      case 'system':
        this.systemChannelSource.next(message);
        break;
      case 'node':
        this.systemNodeChannelSource.next(message);
        break;
      default:
        break;
    }
  }

}

module.exports = new MqttRouter();
