'use strict';

const { SseEmitterService } = require('../services');

class MqttRouter {

  constructor() {}

  init(client) {
    this.client = client;
  }

  inbound(topic, message) {
    SseEmitterService.emit({
      topic: topic,
      message: message
    });
  }

  oubound(topic, message) {
    this.client.publish(topic, message);
  }

}

module.exports = new MqttRouter();
