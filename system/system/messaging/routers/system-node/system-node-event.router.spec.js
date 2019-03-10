'use strict';

const SystemNodeEventRouter = require('./system-node-event.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] SystemNodeEventRouter', () => {

  const router = SystemNodeEventRouter;
  let message;

  beforeEach(() => {
    message = new MqttMessage('', 'test');
  });

  it('Should route humdity event through outbound channel', (done) => {
    message.topic = 'humidity';
    router.webOutboundChannel.subscribe(result => {
      expect(result.topic).toContain(message.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

  it('Should route notification event through outbound channel', (done) => {
    message.topic = 'notification';
    router.webOutboundChannel.subscribe(result => {
      expect(result.topic).toContain(message.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

  it('Should route proximity event through outbound channel', (done) => {
    message.topic = 'proximity';
    router.webOutboundChannel.subscribe(result => {
      expect(result.topic).toContain(message.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

  it('Should route relay event through outbound channel', (done) => {
    message.topic = 'relay';
    router.webOutboundChannel.subscribe(result => {
      expect(result.topic).toContain(message.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

  it('Should route temperature event through outbound channel', (done) => {
    message.topic = 'temperature';
    router.webOutboundChannel.subscribe(result => {
      expect(result.topic).toContain(message.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

  it('Should route temperature-humidity event through outbound channel', (done) => {
    message.topic = 'temperature-humidity';
    router.webOutboundChannel.subscribe(result => {
      expect(result.topic).toContain(message.topic);
      expect(result.message).toBe(message.message);
      done();
    });
    router.route(message);
  });

});
