import { IMessageService, MqttMessage, SystemConfiguration } from '@grow/common';
import { Observable } from 'rxjs';
import { SystemNodeCommandMessageRouter } from '../routers/system-node-command-message.router';
import { TemperatureHumidityCommandService } from './temperature-humidity-command.service';
import { RelayCommandService } from './relay-command.service';
import { SystemNodeMessageRouter } from '../routers/system-node-message.router';
import { SystemNodeComponentService } from './system-node-component.service';
import { ChannelSegments } from 'system-node/application.constants';
import { SystemNodeStatusService } from './system-node-status.service';

export const configureMessageServices: Function = (): IMessageService[] => {
  const relayChannel: Observable<MqttMessage> = SystemNodeCommandMessageRouter.getInstance().getChannel(ChannelSegments.RELAY);
  const componentChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel(ChannelSegments.COMPONENT);
  const tempHumChannel: Observable<MqttMessage> = SystemNodeCommandMessageRouter.getInstance().getChannel(ChannelSegments.TEMPHUM);
  const registerChannel: Observable<MqttMessage> = SystemNodeMessageRouter.getInstance().getChannel(ChannelSegments.REGISTER);
  
  const services: IMessageService[] = [
    new RelayCommandService(relayChannel),
    new SystemNodeComponentService(componentChannel),
    new SystemNodeStatusService(registerChannel),
    new TemperatureHumidityCommandService(tempHumChannel)
  ];

  return services;
};
