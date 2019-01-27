'use strict';

const Rx = require('rxjs');

class SystemNodeEventRouter {

  constructor() {
    this.relaysSource = new Rx.Subject({});
    this.relays = this.relaysSource.asObservable();
  }

  route(topic, message) {
    const [id, action] = topic.split('/');
    console.log("SystemNodeEventRouter::Topic::" + topic);
    console.log("SystemNodeEventRouter::Message::" + message);
    this.relaysSource.next(message);
    /*
      Above should be replaced with a swtich statement routing to appropriate
      action service.
    */
  }


}

module.exports = new SystemNodeEventRouter();
