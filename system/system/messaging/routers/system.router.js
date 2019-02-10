'use strict';

const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const MqttRouter = require('./mqtt.router');

class SystemRouter {

  constructor() {
    MqttRouter.systemChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      default:
        console.log('SystemRouter::Default::No case for route');
    }
  }

}

module.exports = new SystemRouter();
