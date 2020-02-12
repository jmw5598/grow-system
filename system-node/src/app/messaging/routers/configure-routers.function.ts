import { IRoutable, MqttMessage, MqttInboundMessageRouter } from '@grow/common';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { SystemNodeCommandMessageRouter } from './system-node-command-message.router';

const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
const systemNodeCommandMessageRouter: SystemNodeCommandMessageRouter = SystemNodeCommandMessageRouter.getInstance();

export const configureMessageRouters: Function = (): IRoutable => {
  // @@@ TODO get rid of these magic strings
  mqttInboundMessageRouter
    .getChannel('inbound')
    .receivedMessage()
    .subscribe((message: MqttMessage): void => mqttMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel('node')
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeMessageRouter.routeMessage(message));

  systemNodeMessageRouter
    .getChannel('command')
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeCommandMessageRouter.routeMessage(message));
  
  return mqttInboundMessageRouter;
}