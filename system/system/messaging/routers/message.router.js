'use strict';

const Rx = require('rxjs');
const { MqttMessage } = require('../models');

class MessageRouter {

  constructor() {
    this.routes = {};
  }

  setup(routes) {
    routes.forEach(r => {
      this.routes[r.channel] = { source: new Rx.Subject() };
      this.routes[r.channel].channel = this.routes[r.channel].source.asObservable();
    });
  }

  // route(message, props) where props contains a routed topic override?
  route(message) {
    const keys = Object.keys(this.routes);
    const [segment] = message.topic.split('/');
    if(keys.includes(segment)) {
        const routedTopic = message.topic.split('/').slice(1).join('/');
        const outbound = new MqttMessage(routedTopic, message.message);
        this.routes[segment].source.next(outbound);
    }
  }

}

module.exports = MessageRouter;
