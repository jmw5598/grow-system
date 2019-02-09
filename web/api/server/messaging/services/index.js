'use strict';

const HumidityPersistenceService = require('./persistence/humidity-persistence.service');
const ProximityPersistenceService = require('./persistence/proximity-persistence.service');
const SystemNodeEventEmitterService = require('./emitters/system-node-event-emitter.service');
const TemperatureHumidityPersistenceService = require('./persistence/temperature-humidity-persistence.service');
const TemperaturePersistenceService = require('./persistence/temperature-persistence.service');

module.exports = {
  HumidityPersistenceService,
  ProximityPersistenceService,
  SystemNodeEventEmitterService,
  TemperatureHumidityPersistenceService,
  TemperaturePersistenceService
}
