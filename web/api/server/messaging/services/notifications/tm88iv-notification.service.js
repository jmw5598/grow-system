'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');
const Printer = require('node-thermal-printer');

class TM88IVNotificationService {

  constructor() {
    SystemNodeEventMessageRouter.routes.notification.channel
      .subscribe(message => this.notify(message));
    Printer.init({
      type: Printer.printerTypes.EPSON,
      interface: 'tcp://192.168.1.9:9100',
      ip: 'localhost',
      port: 9001,
      width: 42,
      characterSet: 'USA',
    });
  }

  notify(message) {
    console.log('[API] Sending notificaiton to TM88IV Epson printer');
  }

}

module.exports = new TM88IVNotificationService();
