import { AbstractMessageRouter, MessageRoute } from '@grow/common';

export class SystemNodeMessageRouter extends AbstractMessageRouter {
  private static instance: SystemNodeMessageRouter;

  private constructor() {
    super([
      new MessageRoute('command', 'command'),
      new MessageRoute('component', 'component'),
      new MessageRoute('register', 'register')
    ]);
  }

  public static getInstance(): SystemNodeMessageRouter {
    if (!SystemNodeMessageRouter.instance) {
      SystemNodeMessageRouter.instance = new SystemNodeMessageRouter();
    }

    return SystemNodeMessageRouter.instance;
  }
}