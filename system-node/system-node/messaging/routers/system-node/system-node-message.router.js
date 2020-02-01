'use strict';

const { MessageRoute, MessageRouter } = require('@grow/common');

const SystemNodeMessageRouter = new MessageRouter();

SystemNodeMessageRouter.setup([
  new MessageRoute('command', 'command'),
  new MessageRoute('component', 'component'),
  new MessageRoute('register', 'register')
]);

module.exports = SystemNodeMessageRouter;
