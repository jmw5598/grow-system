'use strict';

const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const MqttRouter = require('./mqtt.router');

class SystemNodeRouter {

  constructor() {
    this.init();
    this.systemNodeEventChannelSource = new Rx.Subject();
    this.systemNodeEventChannel = this.systemNodeEventChannelSource.asObservable();
  }

  init() {
    MqttRouter.systemNodeChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
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
