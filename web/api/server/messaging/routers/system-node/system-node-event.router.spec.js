'use strict';

const SystemNodeEventRouter = require('./system-node-event.router');
const { MqttMessage } = require('../../models');

describe('[API] SystemNodeEventRouter', () => {

  const router = SystemNodeEventRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through humidityEventChannel', (done) => {
    const message = new MqttMessage('humidity/test/', 'test');
    router.humidityEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through proximityEventChannel', (done) => {
    const message = new MqttMessage('proximity/test/', 'test');
    router.proximityEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through relayEventChannel', (done) => {
    const message = new MqttMessage('relay/test/', 'test');
    router.relayEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through temperatureEventChannel', (done) => {
    const message = new MqttMessage('temperature/test/', 'test');
    router.temperatureEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through temperatureHumidityEventChannel', (done) => {
    const message = new MqttMessage('temperature-humidity/test/', 'test');
    router.temperatureHumidityEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through notificationEventChannel', (done) => {
    const message = new MqttMessage('notification/test/', 'test');
    router.notificationEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
