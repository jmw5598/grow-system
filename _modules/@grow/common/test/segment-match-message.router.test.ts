import { take } from 'rxjs/operators';
import { MqttMessage } from '../src/lib/messaging/models/mqtt-message.model';
import { MockSegmentMatchMessageRouter } from './mocks/mock-segment-match-message.router';
import { MessageRoute, IPubSubChannel } from '../src/lib';

describe('abstract-message.router', () => {
  let mockSegmentMatchMessageRouter: MockSegmentMatchMessageRouter;
  let mockChannelName: string = 'test';
  let mockChannel: IPubSubChannel;
  let mockMessage: MqttMessage;
  let mockMessageRoutedResult: MqttMessage;

  beforeAll(() => {
    mockSegmentMatchMessageRouter = new MockSegmentMatchMessageRouter([
      new MessageRoute('test', 'test')
    ]);
    mockChannel = mockSegmentMatchMessageRouter.getChannel(mockChannelName);
    mockMessage = new MqttMessage('test/result', { test: 'test'});
    mockMessageRoutedResult = new MqttMessage('result', { test: 'test'});
  });

  it('should be defined', () => {
    expect(mockSegmentMatchMessageRouter).toBeDefined();
  });

  it('should return message with truncated topic', (done) => {
    mockChannel
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (routedMessage: MqttMessage) => expect(routedMessage.topic).toEqual(mockMessageRoutedResult.topic),
        complete: () => done()
      });
    mockSegmentMatchMessageRouter.routeMessage(mockMessage);
  });

  it('should return a message with payload unchanged', (done) => {
    mockChannel
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (routedMessage: MqttMessage) => expect(routedMessage.message).toEqual(mockMessageRoutedResult.message),
        complete: () => done()
      });
    mockSegmentMatchMessageRouter.routeMessage(mockMessage);
  })
});