'use strict';

const ComponentController = require('./system-node/component.controller');
const JwtController = require('./authentication/jwt.controller');
const RelayController = require('./system-node/relay.controller');
const SseController = require('./sse/sse.controller');
const TemperatureHumidityController = require('./system-node/temperature-humidity.controller');
const UsersController = require('./authentication/users.controller');

module.exports = {
  ComponentController,
  JwtController,
  RelayController,
  SseController,
  TemperatureHumidityController,
  UsersController
}
