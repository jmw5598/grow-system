'use strict';

const MessageRoute = require('../models').MessageRoute;
const MessageRouter = require('./message.router');

const SchedulerMessageRouter = new MessageRouter();

SchedulerMessageRouter.setup([
  new MessageRoute('create', 'create'),
  new MessageRoute('update', 'update'),
  new MessageRoute('delete', 'delete')
]);

module.exports = {
  SchedulerMessageRouter
}