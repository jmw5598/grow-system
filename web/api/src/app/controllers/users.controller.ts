import { Request, Response } from 'express';

export class UsersController {
  public saveUser(req: Request, res: Response): any {
    return res.status(201).send('Saved User');
  }

  public doesUserExist(req: Request, res: Response): any {
    return res.status(200).send('User exists');
  }

  public getAllUsers(req: Request, res: Response): any {
    return res.status(200).send('Get all users');
  }

  public getUserById(req: Request, res: Response): any {
    return res.status(200).send('Get user by id');
  }

  public deleteUserById(req: Request, res: Response): any {
    return res.status(200).send('Deleted user by id');
  }
}
