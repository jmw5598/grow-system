'use strict';

const HumidityPersistenceService = require('./persistence/humidity-persistence.service');
const TemperaturePersistenceService = require('./persistence/temperature-persistence.service');

module.exports = {
  HumidityPersistenceService,
  TemperaturePersistenceService
}
