import { Request, Response } from 'express';
import { User } from '../data';
import { UsersRepository } from '../repositories';

export class AuthenticationController {
  public async authenticate(req: Request, res: Response): Promise<any> {
    const username: string = req.body.username;
    const usersRepository: UsersRepository = UsersRepository.getInstance();
    const user: User | undefined = await usersRepository.findByUsername(username);

    if (!user) return res.status(401).send('Invalid username/password');

    return res.status(200).send(user);
  }
}
