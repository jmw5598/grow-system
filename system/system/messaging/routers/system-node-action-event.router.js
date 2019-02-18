'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const SystemNodeActionRouter = require('./system-node-action.router');

class SystemNodeActionEventRouter {

  constructor() {
    SystemNodeActionRouter.systemNodeActionEventChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    let routedTopic = '';

    switch(topic) {
      case 'humidity':
        routedTopic = 'web/system-node/event/humidity';
        break;
      case 'notification':
        routedTopic = 'web/system-node/event/notification';
        break;
      case 'proximity':
        routedTopic = 'web/system-node/event/proximity';
        break;
      case 'relay':
        routedTopic = 'web/system-node/event/relay';
        break;
      case 'temperature':
        routedTopic = 'web/system-node/event/temperature';
        break;
      case 'temperature-humidity':
        routedTopic = 'web/system-node/event/temperature-humidity';
        break;
      default:
        console.log('[System] SystemNodeActionEventRouter::No topic match');
        break;
    }

    const message = new MqttMessage(routedTopic, payload.message);
    MqttGateway.outbound(message);

  }

}

module.exports = new SystemNodeActionEventRouter();
