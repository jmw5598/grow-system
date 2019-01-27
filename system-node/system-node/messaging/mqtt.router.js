'use strict';

const { SystemNodeEventRouter } = require('./routers');

class MqttRouter {

  constructor() {}

  inbound(topic, message) {
    const [event] = (topic.split('/')).splice(1);
  }

  outbound(topic, message) {
    // Outbound message routing (may not use)
  }

}

module.exports = new MqttRouter();
