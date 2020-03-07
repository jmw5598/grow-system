import { take } from 'rxjs/operators';
import { SystemNodeEventMessageRouter } from '../../../src/app/messaging/routers/system-node-event-message.router';
import { MqttMessage } from '@grow/common';
import { ChannelSegments } from '../../../src/app/application.constants';

describe('system-node-event-message.router.ts', () => {
  let systemNodeEventMessageRouter: SystemNodeEventMessageRouter;

  beforeAll(() => {
    systemNodeEventMessageRouter = SystemNodeEventMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemNodeEventMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemNodeEventMessageROuter = SystemNodeEventMessageRouter.getInstance();
    expect(systemNodeEventMessageRouter).toBe(anotherSystemNodeEventMessageROuter);
  });

  it('should route message down humidity channel', done => {
    const message: MqttMessage = new MqttMessage('humidity/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.HUMIDITY)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down proximity channel', done => {
    const message: MqttMessage = new MqttMessage('proximity/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.PROXIMITY)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down moisture channel', done => {
    const message: MqttMessage = new MqttMessage('moisture/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.MOISTURE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down notification channel', done => {
    const message: MqttMessage = new MqttMessage('notification/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.NOTIFICATION)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down relay channel', done => {
    const message: MqttMessage = new MqttMessage('relay/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.RELAY)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down temperature channel', done => {
    const message: MqttMessage = new MqttMessage('temperature/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.TEMPERATURE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down temphum channel', done => {
    const message: MqttMessage = new MqttMessage('temphum/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.TEMPHUM)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });

  it('should route message down status channel', done => {
    const message: MqttMessage = new MqttMessage('status/result', { test: 'test' });
    systemNodeEventMessageRouter
      .getChannel(ChannelSegments.STATUS)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeEventMessageRouter.routeMessage(message);
  });
});
