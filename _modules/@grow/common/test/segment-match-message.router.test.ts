import { take } from 'rxjs/operators';
import { MqttMessage } from '../src/lib/messaging/models/mqtt-message.model';
import { FakeSegmentMatchMessageRouter } from './fakes/fake-segment-match-message.router';
import { MessageRoute, IPubSubChannel } from '../src/lib';

describe('abstract-message.router', () => {
  let fakeSegmentMatchMessageRouter: FakeSegmentMatchMessageRouter;
  const fakeChannelName = 'test';
  let fakeChannel: IPubSubChannel;
  let fakeMessage: MqttMessage;
  let fakeMessageRoutedResult: MqttMessage;

  beforeAll(() => {
    fakeSegmentMatchMessageRouter = new FakeSegmentMatchMessageRouter([new MessageRoute('test', 'test')]);
    fakeChannel = fakeSegmentMatchMessageRouter.getChannel(fakeChannelName);
    fakeMessage = new MqttMessage('test/result', { test: 'test' });
    fakeMessageRoutedResult = new MqttMessage('result', { test: 'test' });
  });

  it('should be defined', () => {
    expect(fakeSegmentMatchMessageRouter).toBeDefined();
  });

  it('should return message with truncated topic', done => {
    fakeChannel
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (routedMessage: MqttMessage) => expect(routedMessage.topic).toEqual(fakeMessageRoutedResult.topic),
        complete: () => done(),
      });
    fakeSegmentMatchMessageRouter.routeMessage(fakeMessage);
  });

  it('should return a message with payload unchanged', done => {
    fakeChannel
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (routedMessage: MqttMessage) => expect(routedMessage.message).toEqual(fakeMessageRoutedResult.message),
        complete: () => done(),
      });
    fakeSegmentMatchMessageRouter.routeMessage(fakeMessage);
  });
});
