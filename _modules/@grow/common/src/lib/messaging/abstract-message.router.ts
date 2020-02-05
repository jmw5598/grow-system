import { Observable, EMPTY } from 'rxjs';
import { ISendable } from './interfaces/sendable.interface';
import { IRoutable } from './interfaces/routable.interface';
import { MqttMessage } from './models/mqtt-message.model';
import { MessageRoute } from './models/message-route.model';
import { Route } from './models/route.model';

export abstract class AbstractMessageRouter implements IRoutable {
  private _routes: { [key: string]: ISendable };

  constructor(routes: MessageRoute[]) {
    this._routes = {};
    routes.forEach(r => (this._routes[r.channel] = new Route()));
  }

  public routeMessage(message: MqttMessage): void {
    const keys: string[] = Object.keys(this._routes);
    const [segment] = message.topic.split('/');
    if (keys.includes(segment)) {
      const routedTopic: string = message.topic
        .split('/')
        .slice(1)
        .join('/');
      const outboundMessage: MqttMessage = new MqttMessage(routedTopic, message.message);
      this._routes[segment].sendMessage(outboundMessage);
    }
  }

  public getChannel(channelName: string): Observable<MqttMessage> {
    const keys: string[] = Object.keys(this._routes);
    if (keys.includes(channelName)) {
      return this._routes[channelName].getChannel(channelName);
    }

    return EMPTY;
  }
}
