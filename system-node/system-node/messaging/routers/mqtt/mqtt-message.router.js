'use strict';

const { MessageRoute, MessageRouter } = require('@grow/common');

const MqttMessageRouter = new MessageRouter();

MqttMessageRouter.setup([
  new MessageRoute('system', 'system'),
  new MessageRoute('node', 'node')
]);

module.exports = MqttMessageRouter;
