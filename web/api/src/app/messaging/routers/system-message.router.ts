import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.constants';

export class SystemMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemMessageRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.EVENT, ChannelSegments.EVENT)]);
  }

  public static getInstance(): SystemMessageRouter {
    if (!SystemMessageRouter.instance) {
      SystemMessageRouter.instance = new SystemMessageRouter();
    }

    return SystemMessageRouter.instance;
  }
}
