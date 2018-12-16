'use strict';

const express = require('express');
const V1Router = express.Router();

const SseRouter = require('./sse.router');
const SystemsRouter = require('./systems.router');

V1Router.use('/systems', SystemsRouter);
V1Router.use('/events', SseRouter);

module.exports = V1Router;
