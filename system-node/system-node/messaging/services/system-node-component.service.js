'use strict';

const shortid = require('shortid');
const ApplicationContext = require('../../application.context');
const ActionFactory = require('../../action.factory');
const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;
const Logger = require('../../utilities').Logger;
console.log('SNCP: ', ActionFactory);
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
    const component = message.message.payload;
    const found = this.config.node.components.find(e => e.id === component.id);
    
    if(!found) return;
    
    Object.assign(found, component);
    ApplicationContext.setItem('config', this.confg);
  }

  _deleteComponent(message) {
    if(!this.config) return;
    this.logger.debug(`Deleting component...`);
    // TODO : Logic to create new component and add to config.
    // TODO : Update config and save in application context.
    ApplicationContext.setItem('config', this.confg);
  }

}

module.exports = new SystemNodeComponentService();