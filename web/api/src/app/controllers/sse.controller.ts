import { Request, Response } from 'express';

export class SseController {
  public subscribe(request: Request, response: Response): any {
    return response;
  }
}
