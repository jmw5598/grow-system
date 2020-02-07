import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { User } from '../data';

export class AuthenticationController {
  public async authenticate(req: Request, res: Response): Promise<any> {
    const usersRepository: Repository<User> = getRepository(User);
    const users: User[] = await usersRepository.find();
    return res.status(200).send(users);
  }
}
