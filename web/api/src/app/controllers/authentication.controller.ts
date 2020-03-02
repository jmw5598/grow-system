import { Request, Response, NextFunction } from 'express';
import { IAuthenticationService, AuthenticationService } from '../services';
import { AuthenticatedUser } from '../models';

export class AuthenticationController {
  private readonly _authenticationService: IAuthenticationService;

  constructor() {
    this._authenticationService = new AuthenticationService();
  }

  public async authenticate(req: Request, res: Response, next: NextFunction): Promise<any> {
    const username: string = (req.body.username || '').trim();
    const password: string = (req.body.password || '').trim();
    
    return this._authenticationService.authenticateUser(username, password)
      .then((authenticatedUser: AuthenticatedUser) => res.status(200).send(authenticatedUser))
      .catch((error: Error) => res.status(401).send(error.message));
  }
}
