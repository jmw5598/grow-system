import { IRoutable } from '../interfaces/routable.interface';
import { MessageRoute } from '../models/message-route.model';
import { IPubSubChannel } from '../interfaces/pub-sub-channel.interface';
import { PubSubChannel } from '../channels/pub-sub.channel';
import { MqttMessage } from '../models/mqtt-message.model';
import { AbstractMessageRouter } from './abstract-message.router';

export class MqttInboundMessageRouter extends AbstractMessageRouter {
  private static instance: MqttInboundMessageRouter;

  private constructor() {
    super([new MessageRoute('inbound', 'inbound')]);
  }

  public static getInstance(): MqttInboundMessageRouter {
    if (!MqttInboundMessageRouter.instance) {
      MqttInboundMessageRouter.instance = new MqttInboundMessageRouter();
    }

    return MqttInboundMessageRouter.instance;
  }

  public routeMessage(message: MqttMessage): void {
    if (!message) return;
    const routedTopic: string = message.topic
      .split('/')
      .splice(1)
      .join('/');
    const outboundMessage: MqttMessage = new MqttMessage(routedTopic, message.message);
    this._channels['inbound'].sendMessage(outboundMessage);
  }
}
