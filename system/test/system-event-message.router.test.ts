import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemEventMessageRouter } from '../src/app/messaging/routers/system-event-message.router';

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
});
