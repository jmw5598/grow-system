'use strict';

const MqttRouter = require('./mqtt/mqtt.router');
const SystemNodeEventRouter = require('./system-node/system-node-event.router');
const SystemNodeRouter = require('./system-node/system-node.router');
const SystemRouter = require('./system/system.router');

module.exports = {
  MqttRouter,
  SystemNodeRouter,
  SystemNodeEventRouter,
  SystemRouter
}
