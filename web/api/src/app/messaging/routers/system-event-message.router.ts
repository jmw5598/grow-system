import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.contants';

export class SystemEventMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemEventMessageRouter;

  private constructor() {
    super([
      new MessageRoute(ChannelSegments.STATUS, ChannelSegments.STATUS)
    ]);
  }

  public static getInstance(): SystemEventMessageRouter {
    if (!SystemEventMessageRouter.instance) {
      SystemEventMessageRouter.instance = new SystemEventMessageRouter();
    }

    return SystemEventMessageRouter.instance;
  }
}
