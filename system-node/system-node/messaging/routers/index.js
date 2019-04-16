'use strict';

const MqttGateway = require('../gateways').MqttGateway;
const MqttMessageRouter = require('./mqtt/mqtt-message.router');
const SystemNodeMessageRouter = require('./system-node/system-node-message.router');
const SystemNodeCommandMessageRouter = require('./system-node/system-node-command-message.router');

const SystemNodeCommandRouter = require('./system-node/system-node-command.router');

MqttGateway.routes.inbound.channel
  .subcribe(message => MqttMessageRouter.route(message));

MqttMessageRouter.routes.node.channel
  .subscribe(message => SystemNodeMessageRouter.route(message));

SystemNodeMessageRouter.routes.command.channel
  .subscribe(message => SystemNodeCommandMessageRouter.route(message));

module.exports = {
  MqttRouter,
  SystemNodeMessageRouter,
  SystemNodeCommandMessageRouter,
  SystemNodeCommandRouter
}
