import { IRoutable, MqttMessage, MqttInboundMessageRouter } from '@grow/common';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { SystemNodeCommandMessageRouter } from './system-node-command-message.router';


export const configureMessageRouters: Function = (): IRoutable => {
  const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
  const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
  const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
  const systemNodeCommandMessageRouter: SystemNodeCommandMessageRouter = SystemNodeCommandMessageRouter.getInstance();

  mqttInboundMessageRouter.getChannel('inbound')
    .subscribe((message: MqttMessage) => mqttMessageRouter.routeMessage(message));

  mqttMessageRouter.getChannel('node')
    .subscribe((message: MqttMessage) => systemNodeMessageRouter.routeMessage(message));

  systemNodeMessageRouter.getChannel('command')
    .subscribe((message: MqttMessage) => systemNodeCommandMessageRouter.routeMessage(message));
  
  return mqttInboundMessageRouter;
}