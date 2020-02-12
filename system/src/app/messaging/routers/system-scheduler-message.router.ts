import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.constants';

export class SystemSchedulerMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemSchedulerMessageRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.SCHEDULE, ChannelSegments.SCHEDULE), new MessageRoute('task', 'task')]);
  }

  public static getInstance(): SystemSchedulerMessageRouter {
    if (!SystemSchedulerMessageRouter.instance) {
      SystemSchedulerMessageRouter.instance = new SystemSchedulerMessageRouter();
    }

    return SystemSchedulerMessageRouter.instance;
  }
}
