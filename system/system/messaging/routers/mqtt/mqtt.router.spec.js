const MqttRouter = require('./mqtt.router');
const { MqttMessage } = require('../../models');

describe('[SYSTEM] MqttRouter', () => {

  const router = MqttRouter;
  const expected = new MqttMessage('test', 'test');

  it('Should route message through systemChannel', (done) => {
    const message = new MqttMessage('system/system/test', expected.message);
    router.systemChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    })
    router.route(message);
  });


  it('Should route message through systemNodeChannel', (done) => {
    const message = new MqttMessage('system/system-node/test', expected.message);
    router.systemNodeChannel.subscribe(result => {
      expect(result.topic).toBe(expected.topic);
      expect(result.message).toBe(expected.message);
      done();
    });
    router.route(message);
  });

});
