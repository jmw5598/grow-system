'use strict';

const MqttMessageRouter = require('./mqtt/mqtt-message.router');
const SystemCommandMessageRouter = require('./system/system-command-message.router');
const SystemEventMessageRouter = require('./system/system-event-message.router');
const SystemMessageRouter = require('./system/system-message.router');
const SystemNodeCommandMessageRouter = require('./system-node/system-node-command-message.router');
const SystemNodeEventMessageRouter = require('./system-node/system-node-event-message.router');
const SystemNodeMessageRouter = require('./system-node/system-node-message.router');

MqttMessageRouter.routes.system.channel
  .subscribe(message => SystemMessageRouter.route(message));

MqttMessageRouter.routes.node.channel
  .subscribe(message => SystemNodeMessageRouter.route(message));

SystemMessageRouter.routes.command.channel
  .subscribe(message => SystemCommandMessageRouter.route(message));

SystemMessageRouter.routes.event.channel
  .subscribe(message => SystemEventMessageRouter.route(message));

SystemNodeMessageRouter.routes.command.channel
  .subscribe(message => SystemNodeCommandMessageRouter.route(message));

SystemNodeMessageRouter.routes.event.channel
  .subscribe(message => SystemNodeEventMessageRouter.route(message));

module.exports = {
  MqttMessageRouter,
  SystemCommandMessageRouter,
  SystemEventMessageRouter,
  SystemMessageRouter
}
