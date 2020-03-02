import { getRepository, Repository } from 'typeorm';
import { IUsersRepository } from './interfaces/users-repository.interface';
import { User } from '../data';

export class UsersRepository implements IUsersRepository {
  public async findByUsername(username: string): Promise<User | undefined> {
    const usersRepository: Repository<User> = getRepository(User);
    return await usersRepository
      .find({
        where: { username: username },
        relations: ['roles'],
        take: 1,
      })
      .then((users: User[]) => (users.length > 0 ? users[0] : undefined));
  }
}
