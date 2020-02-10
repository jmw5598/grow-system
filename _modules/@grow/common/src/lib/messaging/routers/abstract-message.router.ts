import { Observable, EMPTY } from 'rxjs';
import { IPubSubChannel } from '../interfaces/pub-sub-channel.interface';
import { IRoutable } from '../interfaces/routable.interface';
import { MqttMessage } from '../models/mqtt-message.model';
import { MessageRoute } from '../models/message-route.model';
import { PubSubChannel } from '../channels/pub-sub.channel';

export abstract class AbstractMessageRouter implements IRoutable {
  private _channels: { [key: string]: IPubSubChannel };

  constructor(routes: MessageRoute[]) {
    this._channels = {};
    routes.forEach(r => (this._channels[r.channel] = new PubSubChannel()));
  }

  public routeMessage(message: MqttMessage): void {
    const keys: string[] = Object.keys(this._channels);
    const [segment] = message.topic.split('/');
    if (keys.includes(segment)) {
      const routedTopic: string = message.topic
        .split('/')
        .slice(1)
        .join('/');
      const outboundMessage: MqttMessage = new MqttMessage(routedTopic, message.message);
      this._channels[segment].sendMessage(outboundMessage);
    }
  }

  public getChannel(channelName: string): IPubSubChannel {
    if (!Object.prototype.hasOwnProperty.call(this._channels, channelName)) {
      this._channels[channelName] = new PubSubChannel();
    }

    return this._channels[channelName];
  }
}
