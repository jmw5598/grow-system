import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.constants';

export class SystemNodeMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemNodeMessageRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.EVENT, ChannelSegments.EVENT)]);
  }

  public static getInstance(): SystemNodeMessageRouter {
    if (!SystemNodeMessageRouter.instance) {
      SystemNodeMessageRouter.instance = new SystemNodeMessageRouter();
    }

    return SystemNodeMessageRouter.instance;
  }
}
