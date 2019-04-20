'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemNodeMessageRouter = new MessageRouter();

SystemNodeMessageRouter.setup([
  new MessageRoute('event', 'event')
]);

module.exports = SystemNodeMessageRouter;
