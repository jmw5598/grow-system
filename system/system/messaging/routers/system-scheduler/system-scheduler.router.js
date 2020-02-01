'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemSchedulerMessageRouter = new MessageRouter();

SystemSchedulerMessageRouter.setup([
  new MessageRoute('schedule', 'schedule'),
  new MessageRoute('task', 'task')
]);

module.exports = SystemSchedulerMessageRouter;