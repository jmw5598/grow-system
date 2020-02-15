import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';
import { ChannelSegments } from '../../application.constants';

export class MqttMessageRouter extends SegmentMatchMessageRouter {
  private static instance: MqttMessageRouter;

  private constructor() {
    super([
      new MessageRoute(ChannelSegments.SYSTEM, ChannelSegments.SYSTEM),
      new MessageRoute(ChannelSegments.NODE, ChannelSegments.NODE),
    ]);
  }

  public static getInstance(): MqttMessageRouter {
    if (!MqttMessageRouter.instance) {
      MqttMessageRouter.instance = new MqttMessageRouter();
    }

    return MqttMessageRouter.instance;
  }
}
