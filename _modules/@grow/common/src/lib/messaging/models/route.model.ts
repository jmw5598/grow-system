import { Subject, Observable } from 'rxjs';
import { MqttMessage } from './mqtt-message.model';

export class Route {
  private _source: Subject<MqttMessage>;

  constructor() {
    this._source = new Subject<MqttMessage>();
  }

  public sendMessage(message: MqttMessage): void {
    this._source.next(message);
  }

  public getChannel(): Observable<MqttMessage> {
    return this._source.asObservable();
  }
}