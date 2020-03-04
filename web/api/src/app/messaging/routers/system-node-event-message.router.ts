import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.contants';

export class SystemNodeEventMessageRouter extends SegmentMatchMessageRouter {
  private static instance: SystemNodeEventMessageRouter;

  private constructor() {
    super([
      new MessageRoute(ChannelSegments.HUMIDITY, ChannelSegments.HUMIDITY),
      new MessageRoute(ChannelSegments.PROXIMITY, ChannelSegments.PROXIMITY),
      new MessageRoute(ChannelSegments.MOISTURE, ChannelSegments.MOISTURE),
      new MessageRoute(ChannelSegments.NOTIFICATION, ChannelSegments.NOTIFICATION),
      new MessageRoute(ChannelSegments.RELAY, ChannelSegments.RELAY),
      new MessageRoute(ChannelSegments.TEMPERATURE, ChannelSegments.TEMPERATURE),
      new MessageRoute(ChannelSegments.TEMPHUM, ChannelSegments.TEMPHUM),
      new MessageRoute(ChannelSegments.STATUS, ChannelSegments.STATUS)
    ]);
  }

  public static getInstance(): SystemNodeEventMessageRouter {
    if (!SystemNodeEventMessageRouter.instance) {
      SystemNodeEventMessageRouter.instance = new SystemNodeEventMessageRouter();
    }

    return SystemNodeEventMessageRouter.instance;
  }
}
