'use strict';

const { SystemNodeEventRouter } = require('../routers');

class RelayEventService {

  constructor() {
    this.relaysSubscription = SystemNodeEventRouter.relays
      .subscribe(
        relay => this.process(relay),
        error => this.error(error)
      );
  }

  process(message) {
    console.log("processing relay toggle");
    console.log("message: ", message);
  }

  error(error) {
    console.log("RelayService::Error::" + error);
  }

}

module.exports = new RelayEventService();
