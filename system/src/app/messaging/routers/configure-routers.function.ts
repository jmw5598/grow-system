import { IRoutable, MqttInboundMessageRouter, MqttMessage } from '@grow/common';
import { MqttMessageRouter } from './mqtt-message.router';
import { SystemCommandMessageRouter } from './system-command-message.router';
import { SystemEventMessageRouter } from './system-event-message.router';
import { SystemMessageRouter } from './system-message.router';
import { SystemNodeMessageRouter } from './system-node-message.router';
import { SystemSchedulerMessageRouter } from './system-scheduler-message.router';

export const configureMessageRouters: Function = (): IRoutable => {
  const mqttInboundMessageRouter: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
  const mqttMessageRouter: MqttMessageRouter = MqttMessageRouter.getInstance();
  const systemCommandMessageRouter: SystemCommandMessageRouter = SystemCommandMessageRouter.getInstance();
  const systemEventMessageRouter: SystemEventMessageRouter = SystemEventMessageRouter.getInstance();
  const systemMessageRouter: SystemMessageRouter = SystemMessageRouter.getInstance();
  const systemNodeMessageRouter: SystemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
  const systemSchedulerMessageRouter: SystemSchedulerMessageRouter = SystemSchedulerMessageRouter.getInstance();

  // @@@ TODO get rid fo these magic string
  // Do the same in system-node routers function
  mqttInboundMessageRouter
    .getChannel('inbound')
    .subscribe((message: MqttMessage) => mqttMessageRouter.routeMessage(message));

  mqttMessageRouter.getChannel('system').subscribe((message: MqttMessage) => systemMessageRouter.routeMessage(message));

  mqttMessageRouter
    .getChannel('node')
    .subscribe((message: MqttMessage) => systemNodeMessageRouter.routeMessage(message));

  systemMessageRouter
    .getChannel('command')
    .subscribe((message: MqttMessage) => systemCommandMessageRouter.routeMessage(message));

  systemMessageRouter
    .getChannel('event')
    .subscribe((message: MqttMessage) => systemEventMessageRouter.routeMessage(message));

  return mqttInboundMessageRouter;
};
