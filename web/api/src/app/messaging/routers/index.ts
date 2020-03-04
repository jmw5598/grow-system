'use strict';

// @@@ TODO Reconfigure the message routing to TS way.
const MqttMessageRouter = require('./mqtt/mqtt-message.router');
const SystemEventMessageRouter = require('./system/system-event-message.router');
const SystemMessageRouter = require('./system/system-message.router');
const SystemNodeEventMessageRouter = require('./system-node/system-node-event-message.router');
const SystemNodeMessageRouter = require('./system-node/system-node-message.router');

MqttMessageRouter.routes.system.channel.subscribe(message => SystemMessageRouter.route(message));

MqttMessageRouter.routes.node.channel.subscribe(message => SystemNodeMessageRouter.route(message));

SystemMessageRouter.routes.event.channel.subscribe(message => SystemEventMessageRouter.route(message));

SystemNodeMessageRouter.routes.event.channel.subscribe(message => SystemNodeEventMessageRouter.route(message));

module.exports = {
  MqttMessageRouter,
  SystemEventMessageRouter,
  SystemMessageRouter,
  SystemNodeEventMessageRouter,
  SystemNodeMessageRouter,
};
