import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemMessageRouter } from '../src/app/messaging/routers/system-message.router';
import { MqttMessage } from '@grow/common';

describe('system-message.router.ts', () => {
  let systemMessageRouter: SystemMessageRouter;

  beforeAll(() => {
    systemMessageRouter = SystemMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemMessageRouter = SystemMessageRouter.getInstance();
    expect(systemMessageRouter).toBe(anotherSystemMessageRouter);
  });

  it('should route message down command channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.COMMAND}/result`, { test: 'test' });
    systemMessageRouter
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
    systemMessageRouter.routeMessage(message);
  });
});
