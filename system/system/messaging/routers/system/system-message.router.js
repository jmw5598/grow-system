'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemMessageRouter = new MessageRouter();

SystemMessageRouter.setup([
  new MessageRoute('command', 'command'),
  new MessageRoute('event', 'event')
]);

module.exports = SystemMessageRouter;
