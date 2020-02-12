import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';

export class SystemMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemMessageRouter;

  private constructor() {
    super([new MessageRoute('command', 'command'), new MessageRoute('event', 'event')]);
  }

  public static getInstance(): SystemMessageRouter {
    if (!SystemMessageRouter.instance) {
      SystemMessageRouter.instance = new SystemMessageRouter();
    }

    return SystemMessageRouter.instance;
  }
}
