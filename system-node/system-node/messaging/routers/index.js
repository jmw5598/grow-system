'use strict';

const MqttRouter = require('./mqtt/mqtt.router');
const SystemNodeActionRouter = require('./system-node/system-node-command.router');

module.exports = {
  MqttRouter,
  SystemNodeCommandRouter
}
