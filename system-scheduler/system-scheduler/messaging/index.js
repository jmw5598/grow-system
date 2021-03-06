'use strict';

require('./models');
require('./routers');
require('./services');
require('./gateways');

const MqttGateway = require('./gateways').MqttGateway;
const MqttMessageRouter = require('./routers').MqttMessageRouter;

MqttGateway.routes.inbound.channel
  .subscribe(message => MqttMessageRouter.route(message));

module.exports = {
  MqttGateway
}
