'use strict';

const { MessageRoute, MessageRouter } = require('@grow/common');

const SystemNodeCommandMessageRouter = new MessageRouter();

SystemNodeCommandMessageRouter.setup([
  new MessageRoute('humidity', 'humidity'),
  new MessageRoute('moisture', 'moisture'),
  new MessageRoute('proximity', 'proximity'),
  new MessageRoute('relay', 'relay'),
  new MessageRoute('temperature', 'temperature'),
  new MessageRoute('temphum', 'temphum')
]);

module.exports = SystemNodeCommandMessageRouter;
