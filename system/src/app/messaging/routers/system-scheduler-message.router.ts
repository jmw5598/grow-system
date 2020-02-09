import { AbstractMessageRouter, MessageRoute } from '@grow/common';

export class SystemSchedulerMessageRouter extends AbstractMessageRouter {
  private static instance: SystemSchedulerMessageRouter;

  private constructor() {
    super([new MessageRoute('schedule', 'schedule'), new MessageRoute('task', 'task')]);
  }

  public static getInstance(): SystemSchedulerMessageRouter {
    if (!SystemSchedulerMessageRouter.instance) {
      SystemSchedulerMessageRouter.instance = new SystemSchedulerMessageRouter();
    }

    return SystemSchedulerMessageRouter.instance;
  }
}
