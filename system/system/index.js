'use strict';

require('./services');
require('./messaging/routers');

const SystemContext = require('./system.context');
const { MqttGateway } = require('./messaging');

class System {

  constructor() {}

  setup(config) {
    this.config = config
  }

  start() {
    SystemContext.init(this.config);
    MqttGateway.init(this.config.mqtt);
  }

}

module.exports = new System();
