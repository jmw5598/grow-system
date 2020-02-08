import { GlobalConfiguration, IRoutable, MqttGateway, ApplicationContext } from '@grow/common';
import { ApplicationContextKeys } from './application.constants';
import { configureMessageRouters } from './messaging';

export class System {
  private _applicationContext: ApplicationContext;
  private _gateway: MqttGateway;
  private _messageRouting: IRoutable;

  constructor(private _config: GlobalConfiguration) {
    this._applicationContext = ApplicationContext.getInstance();
    this._applicationContext.setItem(ApplicationContextKeys.CONFIG, config);
    this._gateway = MqttGateway.getInstance();
    this._messageRouting = configureMessageRouters();
    this._gateway.setup(this._config.system.mqtt, this._messageRouting);
  }

  public start(): void {

  }
}