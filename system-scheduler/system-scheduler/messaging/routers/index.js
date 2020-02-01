'use strict';

const MqttMessageRouter = require('./mqtt-message.router');
const SchedulerMessageRouter = require('./scheduler-message.router');
const TaskMessageRouter = require('./task-message.router');

MqttMessageRouter.routes.node.channel
  .subscribe(message => SystemNodeMessageRouter.route(message));

// bind message channgels for tasks and scheduler

module.exports = {
  MqttMessageRouter,
  SchedulerMessageRouter,
  TaskMessageRouter
}
