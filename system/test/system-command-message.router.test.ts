import { take } from 'rxjs/operators';
import { ChannelSegments } from '../src/app/application.constants';
import { SystemCommandMessageRouter } from '../src/app/messaging/routers/system-command-message.router';

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
});
