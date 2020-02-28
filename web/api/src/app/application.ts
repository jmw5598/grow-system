import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { applicationRouter } from './routers';

export class Application {
  private static instance: Application;
  private _server: Express;

  private constructor() {
    this._server = express();
    this._server.set('host', process.env.HOST || 'localhost');
    this._server.set('port', process.env.PORT || 3000);
    this._server.use(bodyParser.json());
    this._server.use(bodyParser.urlencoded({ extended: true }));
    this._server.use(applicationRouter);
  }

  public static getInstance(): Application {
    if (!Application.instance) {
      Application.instance = new Application();
    }

    return Application.instance;
  }

  public start(): void {
    const host: string = this._server.get('host');
    const port: number = this._server.get('port');

    this._server.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });
  }
}
