'use strict';

const MessageRoute = require('../models').MessageRoute;
const MessageRouter = require('./message.router');

const TaskMessageRouter = new MessageRouter();

TaskMessageRouter.setup([
  new MessageRoute('create', 'create'),
  new MessageRoute('update', 'update'),
  new MessageRoute('delete', 'delete')
]);

module.exports = TaskMessageRouter;