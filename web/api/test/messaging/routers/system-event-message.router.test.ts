import { take } from 'rxjs/operators';
import { SystemEventMessageRouter } from '../../../src/app/messaging/routers/system-event-message.router';
import { MqttMessage } from '@grow/common';
import { ChannelSegments } from '../../../src/app/application.constants';

describe('system-event-message.router.ts', () => {
  let systemEventMessageRouter: SystemEventMessageRouter;

  beforeAll(() => {
    systemEventMessageRouter = SystemEventMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemEventMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemEventMessageROuter = SystemEventMessageRouter.getInstance();
    expect(systemEventMessageRouter).toBe(anotherSystemEventMessageROuter);
  });

  it('should route message down status channel', done => {
    const message: MqttMessage = new MqttMessage('status/result', { test: 'test' });
    systemEventMessageRouter
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
    systemEventMessageRouter.routeMessage(message);
  });
});
