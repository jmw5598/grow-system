'use strict';

const SystemNodeCommandRouter = require('./system-node-command.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM NODE] SystemNodeCommandRouter', () => {

  const router = SystemNodeCommandRouter;
  const expected = new MqttMessage('', 'test');

  it('Should router message through humidityActionChannel', (done) => {
    const message = new MqttMessage('humidity', 'test');
    router.humidityActionChannel.subscribe(result => {
      expect(result.topic.length).toEqual(0);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should router message through proximityActionChannel', (done) => {
    const message = new MqttMessage('proximity', 'test');
    router.proximityActionChannel.subscribe(result => {
      expect(result.topic.length).toEqual(0);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should router message through relayActionChannel', (done) => {
    const message = new MqttMessage('relay', 'test');
    router.relayActionChannel.subscribe(result => {
      expect(result.topic.length).toEqual(0);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should router message through temperatureActionChannel', (done) => {
    const message = new MqttMessage('temperature', 'test');
    router.temperatureActionChannel.subscribe(result => {
      expect(result.topic.length).toEqual(0);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should router message through temperatureHumidityActionChannel', (done) => {
    const message = new MqttMessage('temperature-humidity', 'test');
    router.temperatureHumidityActionChannel.subscribe(result => {
      expect(result.topic.length).toEqual(0);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
