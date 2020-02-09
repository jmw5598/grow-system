import { GlobalConfiguration, IMessageService, IRoutable, MqttGateway, ApplicationContext } from '@grow/common';
import { ApplicationContextKeys } from './application.constants';
import { configureMessageRouters, configureMessageServices } from './messaging';

export class System {
  private _applicationContext: ApplicationContext;
  private _gateway: MqttGateway;
  private _messageRouting: IRoutable;
  private _messageServices: IMessageService[];

  constructor(private _config: GlobalConfiguration) {
    this._applicationContext = ApplicationContext.getInstance();
    this._applicationContext.setItem(ApplicationContextKeys.CONFIG, this._config);
    this._gateway = MqttGateway.getInstance();
    this._messageRouting = configureMessageRouters();
    this._messageServices = configureMessageServices();
    this._gateway.setup(this._config.mqtt, this._messageRouting);
  }

  public start(): void {
    console.log('starting system application');
  }
}
