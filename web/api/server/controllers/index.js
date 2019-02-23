'use strict';

const JwtController = require('./authentication/jwt.controller');
const RelayController = require('./system-node/relay.controller');
const SseController = require('./sse/sse.controller');
const UsersController = require('./authentication/users.controller');

module.exports = {
  JwtController,
  RelayController,
  SseController,
  UsersController
}
