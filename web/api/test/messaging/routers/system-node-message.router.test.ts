import { take } from 'rxjs/operators';
import { SystemNodeMessageRouter } from '../../../src/app/messaging/routers/system-node-message.router';
import { MqttMessage } from '@grow/common';
import { ChannelSegments } from '../../../src/app/application.constants';

describe('system-node-message.router.ts', () => {
  let systemNodeMessageRouter: SystemNodeMessageRouter;

  beforeAll(() => {
    systemNodeMessageRouter = SystemNodeMessageRouter.getInstance();
  });

  it('should be defined', () => {
    expect(systemNodeMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemNodeMessageROuter = SystemNodeMessageRouter.getInstance();
    expect(systemNodeMessageRouter).toBe(anotherSystemNodeMessageROuter);
  });

  it('should route message down event channel', done => {
    const message: MqttMessage = new MqttMessage('event/result', { test: 'test' });
    systemNodeMessageRouter
      .getChannel(ChannelSegments.EVENT)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done()
      });
    systemNodeMessageRouter.routeMessage(message); 
  });
});
