import { AbstractMessageRouter, MessageRoute, MqttMessage } from '@grow/common';
import { ChannelSegments } from '../../application.constants';

export class IdSegmentRemovalRouter extends AbstractMessageRouter {
  private static instance: IdSegmentRemovalRouter;

  private constructor() {
    super([new MessageRoute(ChannelSegments.ID, ChannelSegments.ID)]);
  }

  public static getInstance(): IdSegmentRemovalRouter {
    if (!IdSegmentRemovalRouter.instance) {
      IdSegmentRemovalRouter.instance = new IdSegmentRemovalRouter();
    }

    return IdSegmentRemovalRouter.instance;
  }

  public routeMessage(message: MqttMessage): void {
    if (!message) return;
    const routedTopic: string = message.topic
      .split('/')
      .splice(1)
      .join('/');
    const outboundMessage: MqttMessage = new MqttMessage(routedTopic, message.message);
    this._channels[ChannelSegments.ID].sendMessage(outboundMessage);
  }
}
