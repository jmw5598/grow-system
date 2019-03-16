'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const MqttRouter = require('../mqtt/mqtt.router');

class SystemRouter {

  constructor() {
    this.systemEventChannelSource = new Rx.Subject();
    this.systemEventChannel = this.systemEventChannelSource.asObservable();
    MqttRouter.systemChannel.subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.split('/').slice(1).join('/');
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'event':
        this.systemEventChannelSource.next(message);
        break;
      default:
        console.log('[API] SystmeRouter::No route for topic');
    }
  }

}

module.exports = new SystemRouter();
