import { IRoutable, MqttMessage, MqttInboundMessageRouter } from '@grow/common';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { SystemNodeCommandMessageRouter } from './system-node-command-message.router';
import { ChannelSegments } from '../../application.constants';

const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
const systemNodeCommandMessageRouter: SystemNodeCommandMessageRouter = SystemNodeCommandMessageRouter.getInstance();

export const configureMessageRouters: Function = (): IRoutable => {
  mqttInboundMessageRouter
    .getChannel(ChannelSegments.INBOUND)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => mqttMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel(ChannelSegments.NODE)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeMessageRouter.routeMessage(message));

  systemNodeMessageRouter
    .getChannel(ChannelSegments.COMMAND)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeCommandMessageRouter.routeMessage(message));

  return mqttInboundMessageRouter;
};
