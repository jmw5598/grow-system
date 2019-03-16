'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const MqttRouter = require('../mqtt/mqtt.router');

class SystemNodeRouter {

  constructor() {
    this.systemNodeEventChannelSource = new Rx.Subject();
    this.systemNodeEventChannel = this.systemNodeEventChannelSource.asObservable();
    MqttRouter.systemNodeChannel.subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.split('/').slice(1).join('/');
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'event':
        this.systemNodeEventChannelSource.next(message);
        break;
      default:
        console.log('[API] SystmeNodeRouter::No route for topic');
    }
  }

}

module.exports = new SystemNodeRouter();
