import { Request, Response } from 'express';

export class AuthenticationController {
  public authenticate(req: Request, res: Response): Response {
    return res.status(200).send('Ok');
  }
}
