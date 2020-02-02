import { MqttMessage, MessageRouter } from '@grow/common';
import { mqttMessageRouter } from './mqtt-message.router';
import { systemNodeMessageRouter } from './system-node-message.router';
import { systemNodeCommandMessageRouter } from './system-node-command-message.router';

mqttMessageRouter.routes.node.channel
  .subscribe((message: MqttMessage) => systemNodeMessageRouter.route(message));

systemNodeMessageRouter.routes.command.channel
  .subscribe((message: MqttMessage) => systemNodeCommandMessageRouter.route(message));

export const inboundMessageRouter: MessageRouter = mqttMessageRouter;
