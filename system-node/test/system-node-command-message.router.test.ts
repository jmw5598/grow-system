import { take } from 'rxjs/operators';
import { SystemNodeCommandMessageRouter } from "../src/app/messaging/routers/system-node-command-message.router";
import { SystemNodeStatusService } from "../src/app/messaging/services/system-node-status.service";
import { MqttMessage } from "@grow/common";
import { ChannelSegments } from '../src/app/application.constants';

describe('', () => {
  let systemNodeCommandMessageRouter: SystemNodeCommandMessageRouter;

  beforeAll(() => {
    systemNodeCommandMessageRouter = SystemNodeCommandMessageRouter.getInstance();
  });
  
  it('should be defined', () => {
    expect(systemNodeCommandMessageRouter).toBeDefined();
  });

  it('should be same instance', () => {
    const anotherSystemNodeCommandMessageRouter = SystemNodeCommandMessageRouter.getInstance();
    expect(systemNodeCommandMessageRouter).toBe(anotherSystemNodeCommandMessageRouter);
  });

  it('should route message down humidity channel', done => {
    const message: MqttMessage = new MqttMessage('humidity/result', { test: 'test' });
    systemNodeCommandMessageRouter
      .getChannel(ChannelSegments.HUMIDITY)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeCommandMessageRouter.routeMessage(message);
  });

  it('should route message down moisture channel', done => {
    const message: MqttMessage = new MqttMessage('moisture/result', { test: 'test' });
    systemNodeCommandMessageRouter
      .getChannel(ChannelSegments.MOISTURE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeCommandMessageRouter.routeMessage(message);
  });

  it('should route message down proximity channel', done => {
    const message: MqttMessage = new MqttMessage('proximity/result', { test: 'test' });
    systemNodeCommandMessageRouter
      .getChannel(ChannelSegments.PROXIMITY)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeCommandMessageRouter.routeMessage(message);
  });

  it('should route message down relay channel', done => {
    const message: MqttMessage = new MqttMessage('relay/result', { test: 'test' });
    systemNodeCommandMessageRouter
      .getChannel(ChannelSegments.RELAY)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeCommandMessageRouter.routeMessage(message);
  });

  it('should route message down temperature channel', done => {
    const message: MqttMessage = new MqttMessage('temperature/result', { test: 'test' });
    systemNodeCommandMessageRouter
      .getChannel(ChannelSegments.TEMPERATURE)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeCommandMessageRouter.routeMessage(message);
  });

  it('should route message down temphum channel', done => {
    const message: MqttMessage = new MqttMessage('temphum/result', { test: 'test' });
    systemNodeCommandMessageRouter
      .getChannel(ChannelSegments.TEMPHUM)
      .receivedMessage()
      .pipe(take(1))
      .subscribe({
        next: (resultMessage: MqttMessage) => {
          expect(resultMessage.topic).toEqual('result');
          expect(resultMessage.message).toEqual(message.message);
        },
        complete: () => done(),
      });
    systemNodeCommandMessageRouter.routeMessage(message);
  });
});
