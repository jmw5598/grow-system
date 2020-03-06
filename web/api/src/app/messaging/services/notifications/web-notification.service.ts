import { MqttMessage, IMessageService, IPubSubChannel } from '@grow/common';

export class WebNotificationService implements IMessageService {
  constructor(channel: IPubSubChannel) {
    channel.receivedMessage()
      .subscribe((message: MqttMessage) => this.processMessage(message)); 
  }

  public processMessage(message: MqttMessage): void {
    console.log('[API] Sending notification to web interface');
  }
}
