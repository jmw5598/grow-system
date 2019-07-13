'use strict'

const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;


class SystemNodeComponentService {

  constructor() {
    SystemNodeMessageRouter.routes.component.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    switch(message.topic) {
      case 'create':
        console.log('create new component');
        break;
      case 'update':
        console.log('updating existing component');
        break;
      case 'delete':
        console.log('deleting existing component');
        break;
      default:
        console.log('No case matched for component service');
        break;
    }
  }

  _createComponent(message) {

  }

  _updateComponent(message) {

  }

  _deleteComponent(message) {

  }

}

module.exports = new SystemNodeComponentService();