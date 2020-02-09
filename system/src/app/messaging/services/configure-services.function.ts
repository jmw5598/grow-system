import { Observable } from 'rxjs';
import { IMessageService, MqttMessage } from '@grow/common';
import { SystemNodeMessageRouter } from '../routers/system-node-message.router';
import { SystemNodeCommandMessageService } from './system-node-command-message.service';
import { SystemNodeComponentMessageService } from './system-node-component-message.service';
import { SystemNodeRegistrationService } from './system-node-registration.service';
import { SystemNodeStatusService } from './system-node-status.service';
import { WebOutboundMessageService } from './web-outbound-message.service';

export const configureMessageServices: Function = (): IMessageService[] => {
  const systemNodeCommandChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel('command');
  const systemNodeComponentChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel('component');
  const systemNodeRegistrationChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel('register');
  const systemNodeStatusChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel('status');
  const systemNodeEventChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel('event');
  
  return [
    new SystemNodeCommandMessageService(systemNodeCommandChannel),
    new SystemNodeComponentMessageService(systemNodeComponentChannel),
    new SystemNodeRegistrationService(systemNodeRegistrationChannel),
    new SystemNodeStatusService(systemNodeStatusChannel),
    new WebOutboundMessageService(systemNodeEventChannel),
  ];
};
