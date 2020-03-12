import { MqttMessage, IMessageService, IPubSubChannel } from '@grow/common';
import Printer from 'node-thermal-printer';

export class TM88IVNotificationService implements IMessageService {
  constructor(channel: IPubSubChannel) {
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));

    // Printer.init({
    //   type: Printer.printerTypes.EPSON,
    //   interface: 'tcp://192.168.1.9:9100',
    //   ip: 'localhost',
    //   port: 9001,
    //   width: 42,
    //   characterSet: 'USA',
    // });
  }

  public processMessage(message: MqttMessage): void {
    console.log('[API] Sending notificaiton to TM88IV Epson printer');
  }
}
