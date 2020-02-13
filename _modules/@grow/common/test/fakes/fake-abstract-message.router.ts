import { AbstractMessageRouter, MessageRoute, MqttMessage } from '../../src/lib';

export class FakeAbstractMessageRouter extends AbstractMessageRouter{
  constructor(routes: MessageRoute[]) {
    super(routes);
  }

  public routeMessage(message: MqttMessage): void {}
}