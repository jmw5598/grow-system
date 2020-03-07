import { take } from 'rxjs/operators';
import { SystemMessageRouter } from '../../../src/app/messaging/routers/system-message.router';
import { MqttMessage } from '@grow/common';
import { ChannelSegments } from '../../../src/app/application.constants';

describe('system-message.router.ts', () => {
  let systemMessageRouter: SystemMessageRouter;

  beforeAll(() => {
    systemMessageRouter = SystemMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemMessageROuter = SystemMessageRouter.getInstance();
    expect(systemMessageRouter).toBe(anotherSystemMessageROuter);
  });

  it('should route message down event channel', done => {
      const message: MqttMessage = new MqttMessage('event/result', { test: 'test' });
      systemMessageRouter
        .getChannel(ChannelSegments.EVENT)
        .receivedMessage()
        .pipe(take(1))
        .subscribe({
          next: (resultMessage: MqttMessage) => {
            expect(resultMessage.topic).toEqual('result');
            expect(resultMessage.message).toEqual(message.message);
          },
          complete: () => done()
        });
      systemMessageRouter.routeMessage(message);
  });
});
