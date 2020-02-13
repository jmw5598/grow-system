import { take } from 'rxjs/operators';
import { IPubSubChannel, PubSubChannel, MqttMessage } from '../src/lib';
import { doesNotReject } from 'assert';

describe('pub-sub-channel.ts', () => {
  let channel: IPubSubChannel;

  beforeAll(() => {
    channel = new PubSubChannel();
  });

  it('should send message down channel', (done) => {
    const testMessage: MqttMessage = new MqttMessage('test', 'test');
    channel.receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (message: MqttMessage) => expect(message).toEqual(testMessage),
        complete: () => done()
      });
    channel.sendMessage(testMessage);
  })
});