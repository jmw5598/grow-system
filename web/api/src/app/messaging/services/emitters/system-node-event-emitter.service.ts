import { Logger, MqttMessage, IMessageService, IPubSubChannel } from '@grow/common';
import { merge, Observable } from 'rxjs';
import { SseEmitterService } from '../../../services';

export class SystemNodeEventEmitterService implements IMessageService {
  private readonly _logger: Logger;
  private readonly _sseEmitterService: SseEmitterService;

  constructor(channels: IPubSubChannel[]) {
    this._logger = new Logger(this.constructor.name);
    this._sseEmitterService = SseEmitterService.getInstance();
    this._subscribeToChannels(channels);
  }

  public processMessage(message: MqttMessage): void {
    this._logger.debug(`Emitting new event ${message.message}`);
    this._sseEmitterService.emit(message.message);
  }

  private _subscribeToChannels(channels: IPubSubChannel[]): void {
    const observables: Observable<MqttMessage>[] = channels.map((e: IPubSubChannel) => e.receivedMessage());
    merge(...observables).subscribe((message: MqttMessage) => this.processMessage(message));
  }
}
