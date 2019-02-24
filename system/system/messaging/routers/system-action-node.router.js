'use strict';

const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const SystemActionRouter = require('./system-action.router');

class SystemActionNodeRouter {

  constructor() {
    this.systemNodeRegistrationChannelSource = new Rx.Subject();
    this.systemNodeRegistrationChannel = this.systemNodeRegistrationChannelSource.asObservable();
    this.systemNodeRegisteredChannelSource = new Rx.Subject();
    this.systemNodeRegisteredChannel = this.systemNodeRegisteredChannelSource.asObservable();
    SystemActionRouter.systemActionNodeChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'register':
        this.systemNodeRegistrationChannelSource.next(message);
        break;
      case 'registered':
        this.systemNodeRegisteredChannelSource.next(message);
        break;
      default:
        cosole.log('[SystemActionNodeRouter]::Default::No topic found');
        break;
    }
  }

}

module.exports = new SystemActionNodeRouter();
