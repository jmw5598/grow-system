import { Logger, MqttGateway, MqttMessage } from '@grow/common';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from './base.controller';

export class SystemNodeComponentController extends BaseController {
  constructor() {
    super('SystemNodeComponentController');
  }

  public async createComponent(req: Request, res: Response, next: NextFunction): Promise<any> {
    this.logger.debug(`Creating new component on node with id ${req.params.nodeId}`);
    const message = this._generateMessage(req.params.nodeId, null, 'create', req.body.payload);
    this.mqttGateway.outbound(message);
    return res.status(200).send({
      status: 'Ok',
      message: message,
    });
  }

  public async updateComponent(req: Request, res: Response, next: NextFunction): Promise<any> {
    this.logger.debug(`Upading component on node with id ${req.params.nodeId}`);
    const message = this._generateMessage(req.params.nodeId, req.params.componentId, 'update', req.body.payload);
    this.mqttGateway.outbound(message);
    return res.status(200).send({
      status: 'Ok',
      message: message,
    });
  }

  public async deleteComponent(req: Request, res: Response, next: NextFunction): Promise<any> {
    this.logger.debug(`Deleting component on node with id ${req.params.nodeId}`);
    const message = this._generateMessage(req.params.nodeId, req.params.componentId, 'delete', {
      id: req.params.componentId,
    });
    this.mqttGateway.outbound(message);
    return res.status(200).send({
      status: 'Ok',
      message: message,
    });
  }

  private _generateMessage(node: string, component: string | null, command: string, payload: any): MqttMessage {
    const topic = `system/node/component/${command}`;
    return new MqttMessage(topic, {
      command: command,
      component: { id: component },
      node: { id: node },
      payload: payload,
    });
  }
}
