'use strict';

const SystemRouter = require('./system.router');
const { MqttMessage } = require('../../models');

describe('[API] SystemRouter', () => {

  const router = SystemRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through systemEventChannel', (done) => {
    const message = new MqttMessage('event/test', 'test');
    router.systemEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
