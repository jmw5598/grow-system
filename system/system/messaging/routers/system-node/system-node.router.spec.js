'use strict';

const SystemNodeRouter = require('./system-node.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] SystemNodeRouter', () => {

  const router = SystemNodeRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through systemNodeCommandChannel', (done) => {
    const message = new MqttMessage('command/test', { node: { id: '123' } });
    router.systemNodeCommandChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through systemNodeEventChannel', (done) => {
    const message = new MqttMessage('event/test', expected.message);
    router.systemNodeEventChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

  it('Should route message through systemNodeRegisterChannel', (done) => {
    const message = new MqttMessage('register/test', expected.message);
    router.systemNodeRegisterChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
