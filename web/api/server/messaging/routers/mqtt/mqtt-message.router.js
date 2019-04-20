'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const MqttMessageRouter = new MessageRouter();

MqttMessageRouter.setup([
  new MessageRoute('system', 'system'),
  new MessageRoute('node', 'node')
]);

module.exports = MqttMessageRouter;
