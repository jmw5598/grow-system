'use strict';

const SystemCommandRouter = require('./system-command.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] SystemCommandRouter', () => {

  const expected = new MqttMessage('test', 'test');
  const router = SystemCommandRouter;

  it('Should route message through systemStatusChannel', (done) => {
    const message = new MqttMessage('status/test', expected.message);
    router.systemStatusChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
