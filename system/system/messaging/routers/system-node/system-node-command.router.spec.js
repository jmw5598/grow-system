'use strict';

const SystemNodeCommandRouter = require('./system-node-command.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] SystemNodeCommandRouter', () => {

  const router = SystemNodeCommandRouter;
  let message;

  beforeEach(() => {
    message = new MqttMessage('', { node: { id: '123' } });
  })

  it('Should route humidity commmand message through channel systemNodeOutboundMessageChannel', (done) => {
    message.topic = 'humidity';
    router.systemNodeOutboundMessageChannel.subscribe(result => {
      expect(result.topic).toContain(message.message.node.id);
      expect(result.topic).toContain(message.topic);
      done();
    });
    router.route(message);
  });

  it('Should route proximity commmand message through channel systemNodeOutboundMessageChannel', (done) => {
    message.topic = 'proximity';
    router.systemNodeOutboundMessageChannel.subscribe(result => {
      expect(result.topic).toContain(message.message.node.id);
      expect(result.topic).toContain(message.topic);
      done();
    });
    router.route(message);
  });

  it('Should route relay commmand message through channel systemNodeOutboundMessageChannel', (done) => {
    message.topic = 'relay';
    router.systemNodeOutboundMessageChannel.subscribe(result => {
      expect(result.topic).toContain(message.message.node.id);
      expect(result.topic).toContain(message.topic);
      done();
    });
    router.route(message);
  });

  it('Should route temperature commmand message through channel systemNodeOutboundMessageChannel', (done) => {
    message.topic = 'temperature';
    router.systemNodeOutboundMessageChannel.subscribe(result => {
      expect(result.topic).toContain(message.message.node.id);
      expect(result.topic).toContain(message.topic);
      done();
    });
    router.route(message);
  });

  it('Should route temperature-humidity commmand message through channel systemNodeOutboundMessageChannel', (done) => {
    message.topic = 'temperature-humidity';
    router.systemNodeOutboundMessageChannel.subscribe(result => {
      expect(result.topic).toContain(message.message.node.id);
      expect(result.topic).toContain(message.topic);
      done();
    });
    router.route(message);
  });

});
