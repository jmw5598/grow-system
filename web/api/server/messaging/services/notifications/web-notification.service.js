'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');

class WebNotificationService {

  constructor() {
    SystemNodeEventMessageRouter.routes.notification.channel
      .subscribe(message => this.notify(message));
  }

  notify(message) {
    console.log('[API] Sending notification to web interface');
  }

}

module.exports = new WebNotificationService();
