'use strict';

const Rx = require('rxjs');

class MqttRouter {

  constructor() {
    this.temperature$ = Rx.Observable.create();
    this.humidity$ = Rx.Observable.create();
  }

  init(client) {
    this.client = client;
  }

  inbound(topic, message) {
    // router topic to appropriate Observable.
    // multiple service activators can be subscribe to each Observable
    // to perform their specific action.
    console.log("NEW MESSAGE: " + topic + " : " + message);
    switch(topic) {
      case 'temperature':
        this._temperature.next(message);
        break;
      case 'humidity':
        this._humidity.next(message);
        break;
      default:
        break;
    }

  }

  oubound(topic, message) {
    this.client.publish(topic, message);
  }

}

module.exports = new MqttRouter();
