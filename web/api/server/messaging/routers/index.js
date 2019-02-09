'use strict';

const MqttRouter = require('./mqtt.router');
const SystemNodeEventRouter = require('./system-node-event.router');
const SystemNodeRouter = require('./system-node.router');
const SystemRouter = require('./system.router');

module.exports = {
  MqttRouter,
  SystemNodeRouter,
  SystemNodeEventRouter,
  SystemRouter  
}
