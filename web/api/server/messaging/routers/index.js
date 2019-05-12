'use strict';

const MqttMessageRouter = require('./mqtt/mqtt-message.router');
const SystemMessageRouter = require('./system/system-message.router');
const SystemNodeEventMessageRouter = require('./system-node/system-node-event-message.router');
const SystemNodeMessageRouter = require('./system-node/system-node-message.router');

MqttMessageRouter.routes.system.channel
  .subscribe(message => SystemMessageRouter.route(message));

MqttMessageRouter.routes.node.channel
  .subscribe(message => SystemNodeMessageRouter.route(message));

SystemNodeMessageRouter.routes.event.channel
   .subscribe(message => SystemNodeEventMessageRouter.route(message));

module.exports = {
  MqttMessageRouter,
  SystemMessageRouter,
  SystemNodeEventMessageRouter,
  SystemNodeMessageRouter
}
