import { IRoutable, MqttInboundMessageRouter } from '@grow/common';

export const configureMessageRouters: Function = (): IRoutable => {
  const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();

  return mqttInboundMessageRouter;
};
