'use strict';

const { MqttMessage } = require('../models');
const { MqttGateway } = require('../gateways');
const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.systemChannelSource = new Rx.Subject();
    this.systemChannel = this.systemChannelSource.asObservable();
    this.systemNodeChannelSource = new Rx.Subject();
    this.systemNodeChannel = this.systemNodeChannelSource.asObservable();
    MqttGateway.inboundChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    payload.topic = payload.topic.substring(payload.topic.indexOf('/') + 1); // skips web/
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'system':
        this.systemChannelSource.next(message);
        break;
      case 'system-node':
        this.systemNodeChannelSource.next(message);
        break
      default:
        console.log('[API] MqttRouter::Default::No case for route');
        break;
    }
  }

}

module.exports = new MqttRouter();
