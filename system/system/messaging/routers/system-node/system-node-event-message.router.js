'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemNodeEventMessageRouer = new MessageRouter();

SystemNodeEventMessageRouter.setup([
  new MessageRoute('humidity', 'humidity'),
  new MessageRoute('moisture', 'moisture'),
  new MessageRoute('notification', 'notification'),
  new MessageRoute('proximity', 'proximity'),
  new MessageRoute('relay', 'relay'),
  new MessageRoute('temperature', 'temperature'),
  new MessageRoute('temphum', 'temphum')
]);

module.exports = SystemNodeEventMessageRouter;
