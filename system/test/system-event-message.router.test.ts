import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemEventMessageRouter } from '../src/app/messaging/routers/system-event-message.router';
import { MqttMessage } from '@grow/common';

describe('system-event-message.rotuer.ts', () => {
  let systemEventMessageRouter: SystemEventMessageRouter;

  beforeAll(() => {
    systemEventMessageRouter = SystemEventMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemEventMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemEventMessageRouter = SystemEventMessageRouter.getInstance();
    expect(systemEventMessageRouter).toBe(anotherSystemEventMessageRouter);
  });

  it('should route message down status channe', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.STATUS}/result`, { test: 'test' });
    systemEventMessageRouter
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
    systemEventMessageRouter.routeMessage(message);
  });
});
