'use strict';

const HumidityAction = require('./humidity.action');
const ProximityAction = require('./proximity.action');
const RelayAction = require('./relay.action');
const TemperatureAction = require('./temperature.action');
const TemperatureHumidityAction = require('./temperature-humidity.action');

module.exports = {
  HumidityAction,
  ProximityAction,
  RelayAction,
  TemperatureAction,
  TemperatureHumidityAction
}
