import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';

export class SystemCommandMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemCommandMessageRouter;

  private constructor() {
    super([new MessageRoute('status', 'status')]);
  }

  public static getInstance(): SystemCommandMessageRouter {
    if (!SystemCommandMessageRouter.instance) {
      SystemCommandMessageRouter.instance = new SystemCommandMessageRouter();
    }

    return SystemCommandMessageRouter.instance;
  }
}
