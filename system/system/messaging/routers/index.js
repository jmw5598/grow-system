'use strict';

const MqttRouter = require('./mqtt.router');
const SystemNodeActionEventRouter = require('./system-node-action-event.router');
const SystemNodeActionRouter = require('./system-node-action.router');
const SystemNodeRouter = require('./system-node.router');
const SystemRouter = require('./system.router');

module.exports = {
  MqttRouter,
  SystemNodeActionRouter,
  SystemNodeRouter,
  SystemRouter
}
