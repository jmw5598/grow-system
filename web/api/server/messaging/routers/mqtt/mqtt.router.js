'use strict';

const { MqttMessage } = require('../../models');
const { MqttGateway } = require('../../gateways');
const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.systemChannelSource = new Rx.Subject();
    this.systemChannel = this.systemChannelSource.asObservable();
    this.systemNodeChannelSource = new Rx.Subject();
    this.systemNodeChannel = this.systemNodeChannelSource.asObservable();
    MqttGateway.inboundChannel.subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/').slice(1);
    const routedTopic = payload.topic.split('/').slice(2).join('/');
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
