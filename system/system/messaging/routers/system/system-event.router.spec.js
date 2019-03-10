'use strict';

const SystemEventRouter = require('./system-event.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] SystemEventRouter', () => {

  const expected = new MqttMessage('test', 'test');
  const router = SystemEventRouter;

  it('Should route message to systemStatusChannel', (done) => {
    const message = new MqttMessage('status/test', expected.message);
    router.systemStatusChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
