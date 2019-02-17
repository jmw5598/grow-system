'use strict';

const Rx = require('rxjs');
const MqttRouter = require('./mqtt.router');

class SystemNodeActionRouter {

  constructor() {
    this.relayActionChannelSource = new Rx.Subject({});
    this.relayActionChannel = this.relayActionChannelSource.asObservable();
    this.systemNodeActionSubscription = MqttRouter.systemNodeActionChannel
      .subscribe(async payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    switch(topic) {
      case 'relay':
        this.relayActionChannelSource.next(payload);
        break;
      default:
        console.log('[SYSTEM-NODE] SystemNodeActionRouter::No topic matching action');
        break;
    }
  }


}

module.exports = new SystemNodeActionRouter();
