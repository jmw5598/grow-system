import { Observable } from 'rxjs';
import { MqttMessage, MessageRoute, IPubSubChannel, PubSubChannel } from '../src/lib/';
import { MockAbstractMessageRouter } from './mocks/mock-abstract-message.router';

describe('abstract-message.router', () => {
  let mockAbstractMessageRouter: MockAbstractMessageRouter;
  let testChannelName: string;
  let testChannel: IPubSubChannel;
  
  beforeAll(() => {
    testChannelName = 'test';
    mockAbstractMessageRouter = new MockAbstractMessageRouter(
      [new MessageRoute(testChannelName, testChannelName)]
    );
  });

  beforeEach(() => {
    testChannel = mockAbstractMessageRouter.getChannel('test');
  });
  
  it('should return channel of test', () => {
    expect(testChannel).toBeDefined();
  });

  it('should return an instance of PubSubChannel', () => {
    expect(testChannel).toBeInstanceOf(PubSubChannel);
  })

  it('should create channel if doesn\'t exist', () => {
    const channel: IPubSubChannel = mockAbstractMessageRouter.getChannel('test2');
    expect(channel).toBeDefined();
  });
});