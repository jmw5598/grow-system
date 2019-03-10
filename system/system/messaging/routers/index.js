'use strict';

const MqttRouter = require('./mqtt/mqtt.router');
const SystemNodeActionEventRouter = require('./system-node/system-node-action-event.router');
const SystemNodeActionRouter = require('./system-node/system-node-action.router');
const SystemNodeRouter = require('./system-node/system-node.router');
const SystemActionNodeRouter = require('./system/system-action-node.router');
const SystemCommandRouter = require('./system/system-command.router');
const SystemRouter = require('./system.router');

module.exports = {
  MqttRouter,
  SystemNodeActionRouter,
  SystemNodeRouter,
  SystemActionNodeRouter,
  SystemActionRouter,
  SystemRouter
}
