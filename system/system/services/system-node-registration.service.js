'use strict';

const { MqttGateway } = require('../messaging');
const SystemContext = require('../system.context');

class SystemNodeRegistrationService {

  /*
    TODO:
    Maybe moves this a messaging service?  SystemNodeEventRouter would route
    regiester messages through here to SystemContext instead of direct?
    Something to think about.
  */

  constructor() {
    this.nodesSubscription = SystemContext.nodes
      .subscribe(
        nodes => this.notify(nodes),
        error => this.error(error)
      );
  }

  notify(nodes) {
    console.log("SystemNodeRegistrationService::Notify::Count = " + nodes.length);
    MqttGateway.outbound('system/node/state', nodes);
  }

  error(error) {
    console.log(`SystemNodeRegistration::ERROR::${error}`);
  }

}

module.exports = new SystemNodeRegistrationService();
