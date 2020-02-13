import { Observable } from 'rxjs';
import { MqttMessage, MessageRoute, IPubSubChannel, PubSubChannel } from '../src/lib/';
import { FakeAbstractMessageRouter } from './fakes/fake-abstract-message.router';

describe('abstract-message.router', () => {
  let fakeAbstractMessageRouter: FakeAbstractMessageRouter;
  let fakeChannelName: string;
  let fakeChannel: IPubSubChannel;
  
  beforeAll(() => {
    fakeChannelName = 'test';
    fakeAbstractMessageRouter = new FakeAbstractMessageRouter(
      [new MessageRoute(fakeChannelName, fakeChannelName)]
    );
  });

  beforeEach(() => {
    fakeChannel = fakeAbstractMessageRouter.getChannel('test');
  });
  
  it('should return channel of test', () => {
    expect(fakeChannel).toBeDefined();
  });

  it('should return an instance of PubSubChannel', () => {
    expect(fakeChannel).toBeInstanceOf(PubSubChannel);
  })

  it('should create channel if doesn\'t exist', () => {
    const channel: IPubSubChannel = fakeAbstractMessageRouter.getChannel('test2');
    expect(channel).toBeDefined();
  });
});