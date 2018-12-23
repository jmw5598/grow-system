'use strict';

class MqttRouter {

  constructor() {}

  init(client) {
    this.client = client;
  }

  inbound(topic, message) {
    console.log(`Topic: ${topic}, Message: ${message}`);
  }

  outbound(topic, message) {
    const topic = 'system/node/state';
    this.client.publish(topic, message);
  }

}

module.exports = new MqttRouter();
