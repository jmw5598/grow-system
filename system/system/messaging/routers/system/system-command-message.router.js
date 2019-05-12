'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemCommandMessageRouter = new MessageRouter();

SystemCommandMessageRouter.setup([
  new MessageRoute('status', 'status')
]);

module.exports = SystemCommandMessageRouter;
