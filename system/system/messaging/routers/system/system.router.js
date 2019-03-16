'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const MqttRouter = require('../mqtt/mqtt.router');

class SystemRouter {

  constructor() {
    this.systemCommandChannelSource = new Rx.Subject();
    this.systemCommandChannel = this.systemCommandChannelSource.asObservable();
    this.systemEventChannelSource = new Rx.Subject();
    this.systemEventChannel = this.systemEventChannelSource.asObservable();
    MqttRouter.systemChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'command':
        this.systemCommandChannelSource.next(message);
        break;
      case 'event':
        this.systemEventChannelSource.next(message);
        break;
      default:
        console.log('[SystemRouter]::Default::No route found');
        break;
    }
  }

}

module.exports = new SystemRouter();
