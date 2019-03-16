'use strict';

const MqttRouter = require('./mqtt/mqtt.router');
const SystemNodeCommandRouter = require('./system-node/system-node-command.router');

module.exports = {
  MqttRouter,
  SystemNodeCommandRouter
}
