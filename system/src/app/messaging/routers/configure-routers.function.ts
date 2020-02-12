import { IRoutable, MqttInboundMessageRouter, MqttMessage } from '@grow/common';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemCommandMessageRouter } from './system-command-message.router';
import { SystemEventMessageRouter } from './system-event-message.router';
import { SystemMessageRouter } from './system-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { SystemSchedulerMessageRouter } from './system-scheduler-message.router';
import { ChannelSegments } from '../../application.constants';
import { SystemNodeCommandMessageService } from '../services/system-node-command-message.service';

const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
const systemCommandMessageRouter: SystemCommandMessageRouter = SystemCommandMessageRouter.getInstance();
const systemEventMessageRouter: SystemEventMessageRouter = SystemEventMessageRouter.getInstance();
const systemMessageRouter: SystemMessageRouter = SystemMessageRouter.getInstance();
const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
const systemSchedulerMessageRouter: SystemSchedulerMessageRouter = SystemSchedulerMessageRouter.getInstance();

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
    .getChannel(ChannelSegments.COMMAND)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemCommandMessageRouter.routeMessage(message));

  systemMessageRouter
    .getChannel(ChannelSegments.EVENT)
    .receivedMessage()
    .subscribe((message: MqttMessage): void => systemEventMessageRouter.routeMessage(message));

  return mqttInboundMessageRouter;
};
