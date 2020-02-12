import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.constants';

export class SystemCommandMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemCommandMessageRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.STATUS, ChannelSegments.STATUS)]);
  }

  public static getInstance(): SystemCommandMessageRouter {
    if (!SystemCommandMessageRouter.instance) {
      SystemCommandMessageRouter.instance = new SystemCommandMessageRouter();
    }

    return SystemCommandMessageRouter.instance;
  }
}
