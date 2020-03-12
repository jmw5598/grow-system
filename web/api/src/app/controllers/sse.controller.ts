import { Logger } from '@grow/common';
import { Request, Response } from 'express';
import { SseEmitterService } from '../services';

export class SseController {
  private readonly _logger: Logger;
  private readonly _sseEmitterServier: SseEmitterService;

  constructor() {
    this._logger = new Logger(this.constructor.name);
    this._sseEmitterServier = SseEmitterService.getInstance();
  }

  public async subscribe(req: Request, res: Response): Promise<any> {
    this._logger.debug('Adding new subscriber to SSE events');
    this._sseEmitterServier.addEmitter(res);
  }
}
