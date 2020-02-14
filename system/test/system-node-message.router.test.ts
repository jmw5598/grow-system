import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemNodeMessageRouter } from '../src/app/messaging/routers/system-node-message.router';

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
});
