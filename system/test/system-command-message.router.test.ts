import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemCommandMessageRouter } from '../src/app/messaging/routers/system-command-message.router';
import { MqttMessage } from '@grow/common';

describe('system-command-message.router.ts', () => {
  let systemCommandMessageRouter: SystemCommandMessageRouter;

  beforeAll(() => {
    systemCommandMessageRouter = SystemCommandMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemCommandMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemCommandMessageRouter = SystemCommandMessageRouter.getInstance();
    expect(systemCommandMessageRouter).toBe(anotherSystemCommandMessageRouter);
  });

  it('should route message down system channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.STATUS}/result`, { test: 'test' });
    systemCommandMessageRouter
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
    systemCommandMessageRouter.routeMessage(message);
  });
});
