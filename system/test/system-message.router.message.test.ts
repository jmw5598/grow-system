import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemMessageRouter } from '../src/app/messaging/routers/system-message.router';

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
});
