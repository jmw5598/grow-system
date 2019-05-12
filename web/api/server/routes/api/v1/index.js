'use strict';

const express = require('express');
const V1Router = express.Router();

const SseRouter = require('./sse.router');
const SystemRouter = require('./system.router');

V1Router.use('/system', SystemRouter);
V1Router.use('/events', SseRouter);

module.exports = V1Router;
