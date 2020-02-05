import { MqttClient, IClientSubscribeOptions, connect } from 'mqtt';
import { Subject } from 'rxjs';
import { Logger } from '../utilities/logger.service';
import { MqttMessage } from '../messaging/models/mqtt-message.model';
import { MqttConfiguration } from '../config/mqtt.configuration';

export class MqttGateway {
  private static instance: MqttGateway;

  // @@@ TODO:Convert this to a MessageRouter with ('inbound', 'inbound') MessageRoute
  public routes: any;
  private _config: MqttConfiguration;
  private _logger: Logger;
  private _client: MqttClient | undefined;

  private constructor() {
    this._config = {} as MqttConfiguration;
    this._logger = new Logger(this.constructor.name);
    this.routes = {};
    this.routes.inbound = { source: new Subject() };
    this.routes.inbound.channel = this.routes.inbound.source.asObservable();
  }

  public static getInstance(): MqttGateway {
    if (!MqttGateway.instance) {
      MqttGateway.instance = new MqttGateway();
    }

    return MqttGateway.instance;
  }

  setup(config: MqttConfiguration): void {
    this._config = config;
    this._client = connect(this._config.gateway.uri);

    if (this._client) {
      this._client.on('connect', () => this._subscriptions(this._config.topics.subscriptions));
      this._client.on('message', (topic, message) => this.inbound(topic, JSON.parse(message.toString())));
    }
  }

  inbound(topic: string, message: any): void {
    this._logger.debug(`[MqttGateway] New inbound message: ${topic}`);
    const routedTopic = topic.split('/');
    routedTopic.splice(1, 1);
    const payload = new MqttMessage(routedTopic.join('/'), message);
    this.routes.inbound.source.next(payload);
  }

  outbound(message: MqttMessage): void {
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
