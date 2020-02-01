import { Subject } from 'rxjs';

import { MqttMessage } from './models/mqtt-message.model';
import { MessageRoute } from './models/message-route.model';

export class MessageRouter {

  public routes: any = {};

  constructor() {}

  setup(routes: MessageRoute[]): void {
    routes.forEach(r => {
      this.routes[r.channel] = { source: new Subject<MqttMessage>() };
      this.routes[r.channel].channel = this.routes[r.channel].source.asObservable();
    });
  }

  route(message: MqttMessage): void {
    const keys = Object.keys(this.routes);
    const [segment] = message.topic.split('/');
    if(keys.includes(segment)) {
        const routedTopic = message.topic.split('/').slice(1).join('/');
        const outbound = new MqttMessage(routedTopic, message.message);
        this.routes[segment].source.next(outbound);
    }
  }

}
