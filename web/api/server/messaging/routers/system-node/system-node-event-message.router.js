'use strict';

const MessageRoute = require('../../models').MessageRoute;
const MessageRouter = require('../message.router');

const SystemNodeEventMessageRouter = new MessageRouter();

SystemNodeEventMessageRouter.setup([
  new MessageRoute('humidity', 'humidity'),
  new MessageRoute('proximity', 'proximity'),
  new MessageRoute('moisture', 'moisture'),
  new MessageRoute('notification', 'notification'),
  new MessageRoute('relay', 'relay'),
  new MessageRoute('temperature', 'temperature'),
  new MessageRoute('temphum', 'temphum'),
  new MessageRoute('status', 'status')
]);

module.exports = SystemNodeEventMessageRouter;
