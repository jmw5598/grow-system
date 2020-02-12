import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';

export class SystemNodeMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemNodeMessageRouter;

  private constructor() {
    super([
      new MessageRoute('command', 'command'),
      new MessageRoute('component', 'component'),
      new MessageRoute('event', 'event'),
      new MessageRoute('register', 'register'),
      new MessageRoute('status', 'status'),
    ]);
  }

  public static getInstance(): SystemNodeMessageRouter {
    if (!SystemNodeMessageRouter.instance) {
      SystemNodeMessageRouter.instance = new SystemNodeMessageRouter();
    }

    return SystemNodeMessageRouter.instance;
  }
}
