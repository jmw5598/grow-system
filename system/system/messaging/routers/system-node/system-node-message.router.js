'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemNodeMessageRouter = new MessageRouter();

SystemNodeMessageRouter.setup([
  new MessageRoute('command', 'command'),
  new MessageRoute('component', 'component'),
  new MessageRoute('event', 'event'),
  new MessageRoute('register', 'register'),
  new MessageRoute('status', 'status')
]);

module.exports = SystemNodeMessageRouter;
