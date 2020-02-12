import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from 'app/application.constants';

export class SystemNodeCommandMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemNodeCommandMessageRouter;

  private constructor() {
    super([
      new MessageRoute(ChannelSegments.HUMIDITY, ChannelSegments.HUMIDITY),
      new MessageRoute(ChannelSegments.MOISTURE, ChannelSegments.MOISTURE),
      new MessageRoute(ChannelSegments.PROXIMITY, ChannelSegments.PROXIMITY),
      new MessageRoute(ChannelSegments.RELAY, ChannelSegments.RELAY),
      new MessageRoute(ChannelSegments.TEMPERATURE, ChannelSegments.TEMPERATURE),
      new MessageRoute(ChannelSegments.TEMPHUM, ChannelSegments.TEMPHUM)
    ])
  }

  public static getInstance(): SystemNodeCommandMessageRouter {
    if (!SystemNodeCommandMessageRouter.instance) {
      SystemNodeCommandMessageRouter.instance = new SystemNodeCommandMessageRouter();
    }

    return SystemNodeCommandMessageRouter.instance;
  }
}