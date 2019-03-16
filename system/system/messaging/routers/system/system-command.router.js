'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const SystemRouter = require('./system.router');

class SystemCommandRouter {

  constructor() {
    this.systemStatusChannelSource = new Rx.Subject();
    this.systemStatusChannel = this.systemStatusChannelSource.asObservable();
    SystemRouter.systemCommandChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'status':
        this.systemStatusChannelSource.next(message);
        break;
      default:
        console.log('[SystemCommandRouter]::Default::No route found');
        break;
    }
  }

}

module.exports = new SystemCommandRouter();
