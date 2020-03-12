import { IRoutable, MqttMessage, MqttInboundMessageRouter } from '@grow/common';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemEventMessageRouter } from './system-event-message.router';
import { SystemMessageRouter } from './system-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { SystemNodeEventMessageRouter } from './system-node-event-message.router';
import { ChannelSegments } from '../../application.constants';

const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
const systemMessageRouter: SystemMessageRouter = SystemMessageRouter.getInstance();
const systemEventMessageRouter: SystemEventMessageRouter = SystemEventMessageRouter.getInstance();
const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
const systemNodeEventMessageRouter: SystemNodeEventMessageRouter = SystemNodeEventMessageRouter.getInstance();

export const configureMessageRouters: Function = (): IRoutable => {
  mqttInboundMessageRouter
    .getChannel(ChannelSegments.INBOUND)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => mqttMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel(ChannelSegments.SYSTEM)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel(ChannelSegments.NODE)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeMessageRouter.routeMessage(message));

  systemMessageRouter
    .getChannel(ChannelSegments.SYSTEM)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemEventMessageRouter.routeMessage(message));

  systemNodeMessageRouter
    .getChannel(ChannelSegments.EVENT)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemNodeEventMessageRouter.routeMessage(message));

  return mqttInboundMessageRouter;
};
