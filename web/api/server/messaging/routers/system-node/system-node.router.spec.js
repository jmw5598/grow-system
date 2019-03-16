'use strict';

const SystemNodeRouter = require('./system-node.router');
const { MqttMessage } = require('../../models');

describe('[API] SystemNodeRouter', () => {

  const router = SystemNodeRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through systemNodeEventChannel', (done) => {
    const message = new MqttMessage('event/test', 'test');
    router.systemNodeEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.topic);
      done();
    });
    router.route(message);
  });

});
