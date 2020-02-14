import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemNodeMessageRouter } from '../src/app/messaging/routers/system-node-message.router';
import { MqttMessage } from '@grow/common';

describe('system-node-message.router.ts', () => {
  let systemNodeMessageRouter: SystemNodeMessageRouter;

  beforeAll(() => {
    systemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemNodeMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
    expect(systemNodeMessageRouter).toBe(anotherSystemNodeMessageRouter);
  });

  it('should route message down command channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.COMMAND}/result`, { test: 'test' });
    systemNodeMessageRouter
      .getChannel(ChannelSegments.COMMAND)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeMessageRouter.routeMessage(message);
  });

  it('should route message down component channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.COMPONENT}/result`, { test: 'test' });
    systemNodeMessageRouter
      .getChannel(ChannelSegments.COMPONENT)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeMessageRouter.routeMessage(message);
  });

  it('should route message down event channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.EVENT}/result`, { test: 'test' });
    systemNodeMessageRouter
      .getChannel(ChannelSegments.EVENT)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeMessageRouter.routeMessage(message);
  });

  it('should route message down register channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.REGISTER}/result`, { test: 'test' });
    systemNodeMessageRouter
      .getChannel(ChannelSegments.REGISTER)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeMessageRouter.routeMessage(message);
  });

  it('should route message down status channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.STATUS}/result`, { test: 'test' });
    systemNodeMessageRouter
      .getChannel(ChannelSegments.STATUS)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeMessageRouter.routeMessage(message);
  });
});
