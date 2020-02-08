import { ApplicationContext, Logger, MqttMessage, IMessageService, GlobalConfiguration } from '@grow/common';
import { Observable } from 'rxjs';
import { SystemNodeMessageRouter } from '../routers/system-node-message.router';
import { ActionFactory } from '../../action.factory';
import { ApplicationContextKeys } from 'system-node/application.constants';

const shortid = require('shortid');

export class SystemNodeComponentService implements IMessageService {
  private _config: GlobalConfiguration;
  private _logger: Logger;
  private _actions: any;
  private _applicationContext: ApplicationContext;
  private _systemNodeMessageRouter: SystemNodeMessageRouter;

  constructor(channel: Observable<MqttMessage>) {
    this._config = {} as GlobalConfiguration;
    this._logger = new Logger(this.constructor.name);
    this._applicationContext = ApplicationContext.getInstance();
    this._systemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
    
    this._applicationContext.getItem(ApplicationContextKeys.CONFIG)
      .subscribe((config: any) => this._config = config as GlobalConfiguration);
    
    this._applicationContext.getItem('actions')
      .subscribe((actions:any ) => this._actions = actions);
    
    channel.subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    switch(message.topic) {
      case 'create': return this._createComponent(message);
      case 'update': return this._updateComponent(message);
      case 'delete': return this._deleteComponent(message);
      default: console.log('No case matched for component service'); break;
    }
  }

  private _createComponent(message: MqttMessage): void {
    this._logger.debug(`Creating new component...`);
    const component = Object.assign({ id: shortid.generate() }, message.message);
    this._config.node.components.push(component);
      
    this._actions.push(
      ActionFactory.create(component.type.model, this._config.node, component));

    this._applicationContext.setItem('config', this._config);
    this._applicationContext.setItem('actions', this._actions);
  }

  private _updateComponent(message: MqttMessage): void {
    this._logger.debug(`Updating component...`);
    const component = message.message;
    const componentIndex = this._config.node.components.findIndex(e => e.id === component.id);
    
    if(componentIndex < 0) return;
    
    Object.assign(this._config.node.components[componentIndex], component);
    this._applicationContext.setItem('config', this._config);
  }

  private _deleteComponent(message: MqttMessage): void {
    this._logger.debug(`Deleting component...`);
    const componentIndex = this._config.node.components.findIndex(c => c.id === message.message.id);
    const actionIndex = this._actions.findIndex((action: any) => action.id === message.message.id);

    if(componentIndex < 0 || actionIndex < 0) return;
    
    this._actions[actionIndex].destroy();
    this._actions.splice(actionIndex, 1);
    this._config.node.components.splice(componentIndex, 1);

    this._applicationContext.setItem('config', this._config);
    this._applicationContext.setItem('actions', this._actions);
  }

}