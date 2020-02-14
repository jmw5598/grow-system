import { MqttGateway, MqttMessage } from '../src/lib';

describe('mqtt.gateway.ts', () => {
  let mqttGateway: MqttGateway;

  beforeAll(() => {
    mqttGateway = MqttGateway.getInstance();
  });

  it('should be the same instance', () => {
    const anotherMqttGateway: MqttGateway = MqttGateway.getInstance();
    expect(mqttGateway).toBe(anotherMqttGateway);
  })

  it('should call setup method', () => {
    const mqttGatewaySetupSpy = jest.spyOn(mqttGateway, 'setup').mockImplementation();
    // mqttGateway.setup;
    // expect(mqttGatewaySetupSpy).toBeCalledWith(...);
  })

  it('should call start method', () => {
    const mqttGatewayOutboundSpy = jest.spyOn(mqttGateway, 'outbound').mockImplementation();
    const mqttMessage: MqttMessage = new MqttMessage('test', { test: 'test' });
    mqttGateway.outbound(mqttMessage);
    expect(mqttGatewayOutboundSpy).toBeCalledWith(mqttMessage);
  });
})