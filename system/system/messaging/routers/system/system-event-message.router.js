'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemEventMessageRouter = new MessageRouter();

SystemEventMessageRouter.setup([
  new MessageRoute('status', 'status')
]);

module.exports = SystemEventMessageRouter;
