'use strict';

const express = require('express');
const TemperatureHumidityRouter = express.Router({ mergeParams: true });
const { TemperatureHumidityController } = require('../../../../controllers');

TemperatureHumidityRouter
  .route('/:sensorId/command')
    .patch((req, res) => TemperatureHumidityController.command(req, res));

module.exports = TemperatureHumidityRouter;
