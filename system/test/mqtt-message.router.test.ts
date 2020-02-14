import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { MqttMessageRouter } from '../src/app/messaging/routers/mqtt-message.router';
import { MqttMessage } from '@grow/common';

describe('mqtt-message.router.ts', () => {
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

  it('should route message down scheduler channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.SCHEDULER}/result`, { test: 'test' });
    mqttMessageRouter
      .getChannel(ChannelSegments.SCHEDULER)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    mqttMessageRouter.routeMessage(message);
  });

  it('should route message down system channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.SYSTEM}/result`, { test: 'test' });
    mqttMessageRouter
      .getChannel(ChannelSegments.SYSTEM)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    mqttMessageRouter.routeMessage(message);
  });

  it('should route message down node channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.NODE}/result`, { test: 'test' });
    mqttMessageRouter
      .getChannel(ChannelSegments.NODE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    mqttMessageRouter.routeMessage(message);
  });
});
