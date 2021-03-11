import { Logger, MqttGateway } from '@grow/common';

export abstract class BaseController {
  protected readonly logger: Logger;
  protected readonly mqttGateway: MqttGateway;

  constructor(constructorName: string) {
    this.logger = new Logger(constructorName);
    this.mqttGateway = MqttGateway.getInstance();
  }
}
