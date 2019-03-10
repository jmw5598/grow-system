'use strict';

const SystemRouter = require('./system.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] SystemRouter', () => {

  const expected = new MqttMessage('test', 'test');
  const router = SystemRouter;

  it('Should route message throught systemCommandChannel', (done) => {
    const message = new MqttMessage('command/test', expected.message);
    router.systemCommandChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through systemEventChannel', (done) => {
    const message = new MqttMessage('event/test', expected.message);
    router.systemEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
