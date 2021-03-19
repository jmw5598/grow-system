import { MqttMessage } from '@grow/common';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from './base.controller';

export class TemperatureHumidityController extends BaseController {
  constructor() {
    super('TemperatureHumidityController');
  }

  public async issueCommand(req: Request, res: Response, next: NextFunction): Promise<any> {
    this.logger.debug('Executing new temphum command');
    const message = this._generateCommandMessage(
      req.params.nodeId,
      req.params.sensorId,
      req.body.command,
      req.body.payload,
    );
    this.mqttGateway.outbound(message);
    return res.status(200).send({
      status: 'Ok',
      message: message,
    });
  }

  private _generateCommandMessage(node: string, sensor: string, command: string, payload: any): MqttMessage {
    const topic = 'system/node/command/temphum';
    return new MqttMessage(topic, {
      command: command,
      node: { id: node },
      component: { id: sensor },
      payload: payload,
    });
  }
}
