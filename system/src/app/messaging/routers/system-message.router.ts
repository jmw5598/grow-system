import { AbstractMessageRouter, MessageRoute } from '@grow/common';

export class SystemMessageRouter extends AbstractMessageRouter {
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
