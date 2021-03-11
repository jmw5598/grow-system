import { MqttMessage } from '@grow/common';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from './base.controller';

export class RelayController extends BaseController {
  constructor() {
    super('RelayController');
  }

  public async issueCommand(req: Request, res: Response, next: NextFunction): Promise<any> {
    this.logger.debug('Executing new relay command');
    const message = this._generateCommandMessage(
      req.params.nodeId,
      req.params.relayId,
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
    const topic = 'system/node/command/relay';
    return new MqttMessage(topic, {
      command: command,
      node: { id: node },
      component: { id: sensor },
      payload: payload,
    });
  }
}
