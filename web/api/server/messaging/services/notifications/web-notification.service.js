'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class WebNotificationService {

  constructor() {
    SystemNodeEventRouter.notificationEventChannel
      .subscribe(notification => this.notify(notification));
  }

  notify(message) {
    console.log('[API] Sending notification to web interface');
  }

}

module.exports = new WebNotificationService();
