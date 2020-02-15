import { IMessageService, IPubSubChannel, MqttMessage, SystemConfiguration } from '@grow/common';
import { Observable } from 'rxjs';
import { SystemNodeCommandMessageRouter } from '../routers/system-node-command-message.router';
import { TemperatureHumidityCommandService } from './temperature-humidity-command.service';
import { RelayCommandService } from './relay-command.service';
import { SystemNodeMessageRouter } from '../routers/system-node-message.router';
import { SystemNodeComponentService } from './system-node-component.service';
import { ChannelSegments } from '../../application.constants';
import { SystemNodeStatusService } from './system-node-status.service';

export const configureMessageServices: Function = (): IMessageService[] => {
  const relayChannel: IPubSubChannel = SystemNodeCommandMessageRouter.getInstance().getChannel(ChannelSegments.RELAY);
  const componentChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel(ChannelSegments.COMPONENT);
  const tempHumChannel: IPubSubChannel = SystemNodeCommandMessageRouter.getInstance().getChannel(
    ChannelSegments.TEMPHUM,
  );
  const registerChannel: IPubSubChannel = SystemNodeMessageRouter.getInstance().getChannel(ChannelSegments.REGISTER);

  return [
    new RelayCommandService(relayChannel),
    new SystemNodeComponentService(componentChannel),
    new SystemNodeStatusService(registerChannel),
    new TemperatureHumidityCommandService(tempHumChannel),
  ];
};
