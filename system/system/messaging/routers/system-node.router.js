'use strict';

const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const MqttRouter = require('./mqtt.router');

class SystemNodeRouter {

  constructor() {
    this.systemNodeActionChannelSource = new Rx.Subject();
    this.systemNodeActionChannel = this.systemNodeActionChannelSource.asObservable();
    MqttRouter.systemNodeChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'action':
        this.systemNodeActionChannelSource.next(message);
        break;
      case 'register':
        console.log('sending out node registration to systme');
        break;
      default:
        console.log('SystemNodeRouter::Default::No case for route');
        break;
    }
  }

}

module.exports = new SystemNodeRouter();
