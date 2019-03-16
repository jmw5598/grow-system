'use strict';

const MqttRouter = require('./mqtt.router');
const { MqttMessage } = require('../../models');

describe('[API] MqttRouter', () => {

  const router = MqttRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through systemNodeChannel', (done) => {
    const message = new MqttMessage('web/system-node/test', 'test');
    router.systemNodeChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through systemChannel', (done) => {
    const message = new MqttMessage('web/system/test', 'test');
    router.systemChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
