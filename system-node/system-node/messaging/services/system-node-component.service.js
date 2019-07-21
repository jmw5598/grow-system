'use strict';

const shortid = require('shortid');
const ApplicationContext = require('../../application.context');
const ActionFactory = require('../../action.factory');
const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;
const Logger = require('../../utilities').Logger;

class SystemNodeComponentService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    
    ApplicationContext.getItem('config')
      .subscribe(config => this.config = config);
    
    ApplicationContext.getItem('actions')
      .subscribe(actions => this.actions = actions);
    
    SystemNodeMessageRouter.routes.component.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    switch(message.topic) {
      case 'create': return this._createComponent(message);
      case 'update': return this._updateComponent(message);
      case 'delete': return this._deleteComponent(message);
      default: console.log('No case matched for component service'); break;
    }
  }

  _createComponent(message) {
    this.logger.debug(`Creating new component...`);
    const component = Object.assign({ id: shortid.generate() }, message.message);
    this.config.node.components.push(component);
      
    this.actions.push(
      ActionFactory.create(component.type.model, component));

    ApplicationContext.setItem('config', this.config);
    ApplicationContext.setItem('actions', this.actions);
  }

  _updateComponent(message) {
    this.logger.debug(`Updating component...`);
    const component = message.message;
    const componentIndex = this.config.node.components.findIndex(e => e.id === component.id);
    
    if(componentIndex < 0) return;
    
    Object.assign(this.config.node.components[componentIndex], component);
    ApplicationContext.setItem('config', this.config);
  }

  _deleteComponent(message) {
    this.logger.debug(`Deleting component...`);
    const componentIndex = this.config.node.components.findIndex(c => c.id === message.message.id);
    const actionIndex = this.actions.findIndex(a => a.id === message.message.id);

    if(componentIndex < 0 || actionIndex < 0) return;
    
    this.actions[actionIndex].destroy();
    this.actions.splice(actionIndex, 1);
    this.config.node.components.splice(componentIndex, 1);

    ApplicationContext.setItem('config', this.config);
    ApplicationContext.setItem('actions', this.actions);
  }

}

module.exports = new SystemNodeComponentService();