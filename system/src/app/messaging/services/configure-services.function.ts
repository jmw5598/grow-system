import { Observable } from 'rxjs';
import { IMessageService, IPubSubChannel, MqttMessage } from '@grow/common';
import { SystemNodeMessageRouter } from '../routers/system-node-message.router';
import { SystemNodeCommandMessageService } from './system-node-command-message.service';
import { SystemNodeComponentMessageService } from './system-node-component-message.service';
import { SystemNodeRegistrationService } from './system-node-registration.service';
import { SystemNodeStatusService } from './system-node-status.service';
import { WebOutboundMessageService } from './web-outbound-message.service';

export const configureMessageServices: Function = (): IMessageService[] => {
  const systemNodeCommandChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel('command');
  const systemNodeComponentChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel('component');
  const systemNodeRegistrationChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel('register');
  const systemNodeStatusChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel('status');
  const systemNodeEventChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel('event');

  return [
    new SystemNodeCommandMessageService(systemNodeCommandChannel),
    new SystemNodeComponentMessageService(systemNodeComponentChannel),
    new SystemNodeRegistrationService(systemNodeRegistrationChannel),
    new SystemNodeStatusService(systemNodeStatusChannel),
    new WebOutboundMessageService(systemNodeEventChannel),
  ];
};
