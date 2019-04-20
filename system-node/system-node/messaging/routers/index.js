'use strict';

const MqttMessageRouter = require('./mqtt/mqtt-message.router');
const SystemNodeMessageRouter = require('./system-node/system-node-message.router');
const SystemNodeCommandMessageRouter = require('./system-node/system-node-command-message.router');

MqttMessageRouter.routes.node.channel
  .subscribe(message => SystemNodeMessageRouter.route(message));

SystemNodeMessageRouter.routes.command.channel
  .subscribe(message => SystemNodeCommandMessageRouter.route(message));

module.exports = {
  MqttMessageRouter,
  SystemNodeMessageRouter,
  SystemNodeCommandMessageRouter
}
