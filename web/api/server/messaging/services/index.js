'use strict';

const HumidityPersistenceService = require('./persistence/humidity-persistence.service');
const ProximityPersistenceService = require('./persistence/proximity-persistence.service');
const SmsNotificationService = require('./notifications/sms-notification.service');
const SystemNodeEventEmitterService = require('./emitters/system-node-event-emitter.service');
const TemperatureHumidityPersistenceService = require('./persistence/temperature-humidity-persistence.service');
const TemperaturePersistenceService = require('./persistence/temperature-persistence.service');
const TM88IVNotificationService = require('./notifications/tm88iv-notification.service');
const WebNotificationService = require('./notifications/web-notification.service');

module.exports = {
  HumidityPersistenceService,
  ProximityPersistenceService,
  SmsNotificationService,
  SystemNodeEventEmitterService,
  TemperatureHumidityPersistenceService,
  TemperaturePersistenceService,
  TM88IVNotificationService,
  WebNotificationService
}
