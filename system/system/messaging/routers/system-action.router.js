'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const SystemRouter = require('./system.router');

class SystemActionRouter {

  constructor() {
    this.systemActionNodeChannelSource = new Rx.Subject();
    this.systemActionNodeChannel = this.systemActionNodeChannelSource.asObservable();
    SystemRouter.systemActionChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'node':
        this.systemActionNodeChannelSource.next(message);
        break;
      default:
        console.log('[SystemActionNode]::Default::No route found');
        break;
    }
  }

}

module.exports = new SystemActionRouter();
