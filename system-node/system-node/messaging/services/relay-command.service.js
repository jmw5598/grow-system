'use strict';

const SystemNodeContext = require('../../system-node.context');
const { SystemNodeCommandRouter } = require('../routers');

class RelayCommandService {

  constructor() {
    this.relaysCommandChannelSubscription = SystemNodeCommandRouter.relayCommandChannel
      .subscribe(relay => this.process(relay));
    this.relaysSubscription = SystemNodeContext.relays
      .subscribe(relays => this.relays = relays);
  }

  process(message) {
    let relay = this.relays.find(r => r.id === message.message.component.id);
    if(relay) relay.toggle(message.message.payload.state);
  }

}

module.exports = new RelayCommandService();
