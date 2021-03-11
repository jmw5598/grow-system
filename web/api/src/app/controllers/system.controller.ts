import { BaseController } from './base.controller';
import { MqttMessage } from '@grow/common';
import { NextFunction, Request, Response } from 'express';

export class SystemController extends BaseController {
  constructor() {
    super('SystemController');
  }

  public async getSystemStatus(req: Request, res: Response, next: NextFunction): Promise<any> {
    const message = this._generateMessage();
    this.mqttGateway.outbound(message);
    return res.status(200).send({
      status: 'Ok',
      message: message,
    });
  }

  private _generateMessage(): MqttMessage {
    return new MqttMessage('system/system/command/status', '');
  }
}
