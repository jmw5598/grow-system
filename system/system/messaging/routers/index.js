'use strict';

const MqttRouter = require('./mqtt/mqtt.router');
const SystemCommandRouter = require('./system/system-command.router');
const SystemEventRouter = require('./system/system-event.router');
const SystemNodeCommandRouter = require('./system-node/system-node-command.router');
const SystemNodeEventRouter = require('./system-node/system-node-event.router');
const SystemNodeRouter = require('./system-node/system-node.router');
const SystemRouter = require('./system.router');

module.exports = {
  MqttRouter,
  SystemCommandRouter,
  SystemEventRouter,
  SystemNodeCommandRouter,
  SystemNodeEventROuter,
  SystemRouter
}
