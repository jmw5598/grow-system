import { Observable, EMPTY } from 'rxjs';
import { IPubSubChannel } from '../interfaces/pub-sub-channel.interface';
import { IRoutable } from '../interfaces/routable.interface';
import { MqttMessage } from '../models/mqtt-message.model';
import { MessageRoute } from '../models/message-route.model';
import { PubSubChannel } from '../channels/pub-sub.channel';

export abstract class AbstractMessageRouter implements IRoutable {
  protected _channels: { [key: string]: IPubSubChannel };

  constructor(routes: MessageRoute[]) {
    this._channels = {};
    routes.forEach(r => (this._channels[r.channel] = new PubSubChannel()));
  }

  abstract routeMessage(message: MqttMessage): void;

  public getChannel(channelName: string): IPubSubChannel {
    if (!Object.prototype.hasOwnProperty.call(this._channels, channelName)) {
      this._channels[channelName] = new PubSubChannel();
    }

    return this._channels[channelName];
  }
}
