'use strict';

const { MqttMessage } = require('../../models');
const { MqttGateway } = require('../../gateways');
const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.systemNodeCommandChannelSource = new Rx.Subject();
    this.systemNodeCommandChannel = this.systemNodeCommandChannelSource.asObservable();
    MqttGateway.inboundChannel.subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/').slice(2);
    const routedTopic = payload.topic.split('/').slice(3).join('/');
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'command':
        this.systemNodeCommandChannelSource.next(message);
        break;
      default:
        console.log('[MqttRouter]::Default::No route found');
        break;
    }
  }

}

module.exports = new MqttRouter();
