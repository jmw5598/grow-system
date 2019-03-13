'use strict';

const MqttRouter = require('./mqtt.router');
const { MqttMessage } = require('../../models');

describe('[SystemNode] MqttRouter', () => {

  const router = MqttRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through systemNodeCommandChannel', (done) => {
    const message = new MqttMessage('system-node/123/command/test', 'test');
    router.systemNodeCommandChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
