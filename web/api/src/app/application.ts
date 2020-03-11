import { MqttGateway, IMessageService, IRoutable, GlobalConfiguration } from '@grow/common';
import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { applicationRouter } from './routers';
import { configureMessageRouters, configureMessageServices } from './messaging';

export class Application {
  private _server: Express;
  private _gateway: MqttGateway;
  private _messageRouting: IRoutable;
  private _messageServices: IMessageService[]

  constructor(private _config: GlobalConfiguration) {
    this._server = express();
    this._server.set('host', process.env.HOST || 'localhost');
    this._server.set('port', process.env.PORT || 3000);
    this._server.use(bodyParser.json());
    this._server.use(bodyParser.urlencoded({ extended: true }));
    this._server.use(cors());
    this._server.use(applicationRouter);
    this._gateway = MqttGateway.getInstance();
    this._messageRouting = configureMessageRouters();
    this._messageServices = configureMessageServices();
    this._gateway.setup(this._config.mqtt, this._messageRouting);
  }
  public start(): void {
    const host: string = this._server.get('host');
    const port: number = this._server.get('port');

    this._server.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });
  }
}
