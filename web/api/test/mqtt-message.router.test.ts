import { take } from 'rxjs/operators';
import { MqttMessageRouter } from '../src/app/messaging/routers/mqtt-message.router';
import { MqttMessage } from '@grow/common';
import { ChannelSegments } from '../src/app/application.constants';

describe('mqtt-messager.router.ts',  () => {
  let mqttMessageRouter: MqttMessageRouter;

  beforeAll(() => {
    mqttMessageRouter = MqttMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(mqttMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherMqttMessageRouter = MqttMessageRouter.getInstance();
    expect(mqttMessageRouter).toBe(anotherMqttMessageRouter);
  });

  it('should route message down system channel', done => {
    const message: MqttMessage = new MqttMessage('system/result', { test: 'test' });
    mqttMessageRouter
      .getChannel(ChannelSegments.SYSTEM)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()``
      });
    mqttMessageRouter.routeMessage(message);
  });

  it('should route message down node channel', done => {
    const message: MqttMessage = new MqttMessage('node/result', { test: 'test'});
    mqttMessageRouter
      .getChannel(ChannelSegments.NODE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    mqttMessageRouter.routeMessage(message);
  });
});