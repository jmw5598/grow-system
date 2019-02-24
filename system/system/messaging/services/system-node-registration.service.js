'use strict';

const { SystemActionNodeRouter } = require('../routers');

class SystemNodeRegistrationService {

  constructor() {
    SystemActionNodeRouter.systemNodeRegistrationChannel.subscribe(payload => this.register(payload));
  }

  register(payload) {
    console.log('[SystemNodeRegistrationService] Registering new node to system');
  }

}

module.exports = new SystemNodeRegistrationService();
