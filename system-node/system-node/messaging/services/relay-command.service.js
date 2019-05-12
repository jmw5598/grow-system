'use strict';

const ApplicationContext = require('../../application.context');
const SystemNodeCommandMessageRouter = require('../routers').SystemNodeCommandMessageRouter;

class RelayCommandService {

  constructor() {
    ApplicationContext.getItem('actions').subscribe(actions => this.actions = actions);
    SystemNodeCommandMessageRouter.routes.relay.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    if(!this.actions) return;
    let relay = this.actions.find(r => r.id === message.message.component.id);
    if(relay) relay.toggle(message.message.payload.state);
  }

}

module.exports = new RelayCommandService();
