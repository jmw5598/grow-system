import { MqttClient, IClientSubscribeOptions, connect } from 'mqtt';
import { Subject } from 'rxjs';
import { Logger } from '../utilities/logger.service';
import { MqttMessage } from '../messaging/models/mqtt-message.model';
import { MqttConfiguration } from '../config/mqtt.configuration';
import { IRoutable } from './interfaces/routable.interface';

export class MqttGateway {
  private static instance: MqttGateway;

  private _config: MqttConfiguration;
  private _logger: Logger;
  private _client: MqttClient | undefined;
  private _router: IRoutable | undefined;

  private constructor() {
    this._config = {} as MqttConfiguration;
    this._logger = new Logger(this.constructor.name);
  }

  public static getInstance(): MqttGateway {
    if (!MqttGateway.instance) {
      MqttGateway.instance = new MqttGateway();
    }

    return MqttGateway.instance;
  }

  public setup(config: MqttConfiguration, router: IRoutable): void {
    this._config = config;
    this._client = connect(this._config.gateway.uri);
    this._router = router;
    if (this._client) {
      this._client.on('connect', () => this._subscriptions(this._config.topics.subscriptions));
      this._client.on('message', (topic, message) => {
        const routedMessage = JSON.parse(message.toString());
        const payload = new MqttMessage(topic, routedMessage);
        if (this._router) this._router.routeMessage(payload);
        else console.log('router is  undefined');
      });
    }
  }

  public outbound(message: MqttMessage): void {
    this._logger.debug(`New outbound message: ${message.topic}`);
    const payload = JSON.stringify(message.message);

    if (this._client) {
      this._client.publish(message.topic, payload);
    }
  }

  private _subscriptions(subscriptions: string[]): void {
    if (this._client) {
      this._client.subscribe(subscriptions, { ...this._config.options } as IClientSubscribeOptions);
    }
  }
}
