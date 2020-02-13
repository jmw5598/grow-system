import { take } from 'rxjs/operators';
import { MqttMessage } from '../src/lib/messaging/models/mqtt-message.model';
import { MqttInboundMessageRouter, IPubSubChannel } from '../src/lib';
import { doesNotReject } from 'assert';

describe('mqtt-inbound-message.router', () => {
  let mqttInboundMessageRouter: MqttInboundMessageRouter;
  let inboundChannelName: string;
  let inboundChannel: IPubSubChannel;
  let fakeMessage: MqttMessage;
  
  beforeAll(() => {
    mqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
    inboundChannelName = 'inbound';
    inboundChannel = mqttInboundMessageRouter.getChannel(inboundChannelName);
    fakeMessage = new MqttMessage('test/result', { test: 'test' });
  });

  it('should return the same instance', () => {
    const anotherInstance: MqttInboundMessageRouter = MqttInboundMessageRouter.getInstance();
    expect(anotherInstance).toBe(mqttInboundMessageRouter);
  });

  it('should truncate leading segment', (done) => {
    const resultTopic: string = 'result';
    inboundChannel
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (message: MqttMessage) => expect(message.topic).toEqual(resultTopic),
        complete: () => done()
      });
    mqttInboundMessageRouter.routeMessage(fakeMessage);
  });

  it('should route with message untouched', (done) => {
    inboundChannel
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (message: MqttMessage) => expect(message.message).toBe(fakeMessage.message),
        complete: () => done()
      });
    mqttInboundMessageRouter.routeMessage(fakeMessage);
  });
});