'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const MqttRouter = require('../mqtt/mqtt.router');

class SystemNodeRouter {

  constructor() {
    this.systemNodeCommandChannelSource = new Rx.Subject();
    this.systemNodeCommandChannel = this.systemNodeCommandChannelSource.asObservable();
    this.systemNodeEventChannelSource = new Rx.Subject();
    this.systemNodeEventChannel = this.systemNodeEventChannelSource.asObservable();
    this.systemNodeRegisterChannelSource = new Rx.Subject();
    this.systemNodeRegisterChannel = this.systemNodeRegisterChannelSource.asObservable();
    MqttRouter.systemNodeChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'command':
        this.systemNodeCommandChannelSource.next(message);
        break;
      case 'event':
        this.systemNodeEventChannelSource.next(message);
        break;
      case 'register':
        this.systemNodeRegisterChannelSource.next(message);
        break;
      default:
        console.log('[SystemNodeRouter]::Default::No route found');
        break;
    }
  }

}

module.exports = new SystemNodeRouter();
