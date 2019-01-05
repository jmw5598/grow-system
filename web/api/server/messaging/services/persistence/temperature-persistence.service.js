'use strict';

const MqttRouter = require('../../mqtt.router');

class TemperaturePersistenceService {

  constructor() {
    this.subscription = MqttRouter.temperature$
      subscribe(
        message => this.onMessage(message),
        error => this.onError(error),
        () => this.onComplete()
      );
  }

  onMessage(message) {
    console.log("[TemperaturePersistenceService]::Message::" + message);
    // use TemperatureRepository to save new temperature data.
  }

  onError(error) {
    console.log("[TemperaturePersistenceService]::Error::" + error);
  }

  onComplete() {
    if(this.subscription)
      this.subscription.unsubscribe();
    console.log("[TemperaturePersistenceService]::Completed::observable has completed");
  }

}

module.exports = new TemperaturePersistenceService();
