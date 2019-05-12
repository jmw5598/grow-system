'use strict';

const ApplicationContext = require('../../application.context');
const { MqttGateway } = require('../gateways');
const { SystemNodeMessageRouter } = require('../routers');

class SystemNodeRegistrationService {

  constructor() {
    SystemNodeMessageRouter.routes.register.channel
      .subscribe(message => this.register(message));
  }

  register(payload) {
    console.log('payload:', payload);
    /*
      Do node registration logic here.  Register with ApplicationContext.
      Send out new node registration to web.
    */
  }

}

module.exports = new SystemNodeRegistrationService();
