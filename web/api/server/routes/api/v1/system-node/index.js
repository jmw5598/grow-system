'use strict'

const express = require('express');
const SystemNodeRouter = express.Router();
const ComponentRouter = require('./component.router');
const RelayRouter = require('./relay.router');
const TemperatureHumidityRouter = require('./temperature-humidity.router');

SystemNodeRouter.use('/:nodeId/component', ComponentRouter);
SystemNodeRouter.use('/:nodeId/relay', RelayRouter);
SystemNodeRouter.use('/:nodeId/temphum', TemperatureHumidityRouter);

module.exports = SystemNodeRouter;
