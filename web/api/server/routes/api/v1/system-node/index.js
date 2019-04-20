'use strict'

const express = require('express');
const SystemNodeRouter = express.Router();
const RelayRouter = require('./relay.router');
const TemperatureHumidityRouter = require('./temperature-humidity.router');

SystemNodeRouter.use('/:nodeId/relay', RelayRouter);
SystemNodeRouter.use('/:nodeId/temperature-humidity', TemperatureHumidityRouter);

module.exports = SystemNodeRouter;
