import { MqttMessage, IMessageService, IPubSubChannel } from '@grow/common';

import twilio, { Twilio } from 'twilio';

export class SmsNotificationService implements IMessageService {
  private readonly _twilioClient: Twilio;

  constructor(channel: IPubSubChannel) {
    const sid: string | undefined = process.env.TWILIO_ACCOUNT_SID;
    const tok: string | undefined = process.env.TWILIO_AUTH_TOKEN;
    this._twilioClient = twilio(sid, tok);
    channel.receivedMessage().subscribe((message: MqttMessage) => this.processMessage(message));
  }

  public processMessage(message: MqttMessage): void {
    this._twilioClient.messages;

    const from = process.env.TWILIO_FROM || '';
    const to = process.env.TWILIO_TO || '';

    const msgData: any = {
      from: from,
      to: to,
      body: message.message,
    };

    // @@@ TODO Send sms message.
  }
}
