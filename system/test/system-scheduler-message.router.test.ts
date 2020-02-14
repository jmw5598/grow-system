import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemSchedulerMessageRouter } from '../src/app/messaging/routers/system-scheduler-message.router';

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
});
