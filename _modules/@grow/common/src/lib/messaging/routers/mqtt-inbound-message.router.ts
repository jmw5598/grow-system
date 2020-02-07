import { AbstractMessageRouter } from './abstract-message.router';
import { MessageRoute } from '../models/message-route.model';

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
}
