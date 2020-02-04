import { AbstractMessageRouter, MessageRoute } from '@grow/common';

export class SystemNodeCommandMessageRouter extends AbstractMessageRouter {
  private static instance: SystemNodeCommandMessageRouter;

  private constructor() {
    super([
      new MessageRoute('humidity', 'humidity'),
      new MessageRoute('moisture', 'moisture'),
      new MessageRoute('proximity', 'proximity'),
      new MessageRoute('relay', 'relay'),
      new MessageRoute('temperature', 'temperature'),
      new MessageRoute('temphum', 'temphum')
    ])
  }

  public static getInstance(): SystemNodeCommandMessageRouter {
    if (!SystemNodeCommandMessageRouter.instance) {
      SystemNodeCommandMessageRouter.instance = new SystemNodeCommandMessageRouter();
    }

    return SystemNodeCommandMessageRouter.instance;
  }
}