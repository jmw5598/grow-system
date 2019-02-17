'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class SmsNotificationService {

  constructor() {
    SystemNodeEventRouter.notificationEventChannel
      .subscribe(notification => this.notify(notification));
  }

  notify(message) {
    console.log("[API] Sending SMS notificaiton");
  }

}

module.exports = new SmsNotificationService();
