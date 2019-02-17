'use strict';

const SystemNodeContext = require('../../system-node.context');
const { SystemNodeActionRouter } = require('../routers');

class RelayEventService {

  constructor() {
    this.relaysActionChannelSubscription = SystemNodeActionRouter.relayActionChannel
      .subscribe(relay => this.process(relay));
    this.relaysSubscription = SystemNodeContext.relays
      .subscribe(relays => this.relays = relays);
  }

  process(message) {
    let [relay] = this.relays.filter(r => r.id === message.message.component.id);
    if(relay) relay.toggle(message.message.component.state);
  }

}

module.exports = new RelayEventService();
