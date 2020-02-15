import { AbstractMessageRouter, MessageRoute, MqttMessage } from '../../src/lib';

export class FakeAbstractMessageRouter extends AbstractMessageRouter {
  constructor(routes: MessageRoute[]) {
    super(routes);
  }

  /*eslint no-empty: "error"*/
  public routeMessage(message: MqttMessage): void {
    /* empty */
  }
}
