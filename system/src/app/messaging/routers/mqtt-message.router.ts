import { SegmentMatchMessageRouter, MessageRoute } from '@grow/common';

export class MqttMessageRouter extends SegmentMatchMessageRouter {
  private static instance: MqttMessageRouter;

  private constructor() {
    super([
      new MessageRoute('scheduler', 'scheduler'),
      new MessageRoute('system', 'system'),
      new MessageRoute('node', 'node'),
    ]);
  }

  public static getInstance(): MqttMessageRouter {
    if (!MqttMessageRouter.instance) {
      MqttMessageRouter.instance = new MqttMessageRouter();
    }

    return MqttMessageRouter.instance;
  }
}
