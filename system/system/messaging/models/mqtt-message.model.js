'use strict';

class MqttMessage {
  constructor(topic, message) {
    this.topic = topic,
    this.message = message
  }
}

module.exports = MqttMessage;
