import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemSchedulerMessageRouter } from '../src/app/messaging/routers/system-scheduler-message.router';
import { MqttMessage } from '@grow/common';

describe('system-scheduler-message.router.ts', () => {
  let systemSchedulerMessageRouter: SystemSchedulerMessageRouter;

  beforeAll(() => {
    systemSchedulerMessageRouter = SystemSchedulerMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemSchedulerMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemSchedulerMessageRouter = SystemSchedulerMessageRouter.getInstance();
    expect(systemSchedulerMessageRouter).toBe(anotherSystemSchedulerMessageRouter);
  });

  it('should route message down schedule channel', done => {
    const message: MqttMessage = new MqttMessage(`${ChannelSegments.SCHEDULE}/result`, { test: 'test' });
    systemSchedulerMessageRouter
      .getChannel(ChannelSegments.SCHEDULE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemSchedulerMessageRouter.routeMessage(message);
  });
});
