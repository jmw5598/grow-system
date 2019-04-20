'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');

class SmsNotificationService {

  constructor() {
    SystemNodeEventMessageRouter.routes.notification.channel
      .subscribe(message => this.notify(message));
  }

  notify(message) {
    console.log("[API] Sending SMS notificaiton");
  }

}

module.exports = new SmsNotificationService();
