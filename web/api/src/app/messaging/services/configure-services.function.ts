import { IMessageService, IPubSubChannel } from '@grow/common';
import { SystemEventMessageRouter } from '../routers/system-event-message.router';
import { SystemNodeEventMessageRouter } from '../routers/system-node-event-message.router';
import { SystemNodeEventEmitterService } from '../services/emitters/system-node-event-emitter.service';
import { ChannelSegments } from '../../application.constants';

export const configureMessageServices: Function = (): IMessageService[] => {
  const systemEventStatusChannel: IPubSubChannel = SystemEventMessageRouter.getInstance().getChannel(
    ChannelSegments.STATUS,
  );
  const systemNodeEventHumidityChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.HUMIDITY,
  );
  const systemNodeEventMoistureChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.MOISTURE,
  );
  const systemNodeEventNotificationChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.NOTIFICATION,
  );
  const systemNodeEventProximityChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.PROXIMITY,
  );
  const systemNodeEventRelayChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.RELAY,
  );
  const systemNodeEventTempChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.TEMPERATURE,
  );
  const systemNodeEventTempHumChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.TEMPHUM,
  );
  const systemNodeEventStatusChannel: IPubSubChannel = SystemNodeEventMessageRouter.getInstance().getChannel(
    ChannelSegments.STATUS,
  );

  const eventChannels: IPubSubChannel[] = [
    systemEventStatusChannel,
    systemNodeEventHumidityChannel,
    systemNodeEventMoistureChannel,
    systemNodeEventNotificationChannel,
    systemNodeEventProximityChannel,
    systemNodeEventRelayChannel,
    systemNodeEventTempChannel,
    systemNodeEventTempHumChannel,
    systemNodeEventStatusChannel,
  ];

  return [new SystemNodeEventEmitterService(eventChannels)];
};
