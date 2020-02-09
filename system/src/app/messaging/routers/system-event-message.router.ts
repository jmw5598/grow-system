import { AbstractMessageRouter, MessageRoute } from '@grow/common';

export class SystemEventMessageRouter extends AbstractMessageRouter {
  private static instance: SystemEventMessageRouter;

  private constructor() {
    super([new MessageRoute('status', 'status')]);
  }

  public static getInstance(): SystemEventMessageRouter {
    if (!SystemEventMessageRouter.instance) {
      SystemEventMessageRouter.instance = new SystemEventMessageRouter();
    }

    return SystemEventMessageRouter.instance;
  }
}
