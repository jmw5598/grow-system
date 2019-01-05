'use strict';

const MqttRouter from '../../mqtt.router';

class HumidityPersistenceService {

  constructor() {
    this.subscription = Mqtt.router.humidity$
      .subscribe(
        message => this.onMessage(message),
        error => this.onError(error),
        () => this.onComplete()
      );
  }

  onMessage(message) {
    console.log("[HumidityPersistenceService]::Message::" + message);
    // use HumidityRepository to save data
  }

  onError(error) {
    console.log("[HumidityPersistenceService::Error::]" + error);
  }

  onComplete() {
    if(this.subscription)
      this.subscription.unsubscribe();
    console.log("[HumidityPersistenceService]::Completed::observable has completed");
  }

}

module.exports = new HumidityPersistenceService();
