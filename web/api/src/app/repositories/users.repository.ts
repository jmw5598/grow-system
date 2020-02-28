import { getRepository, Repository } from 'typeorm';
import { User } from '../data';
import { rejects } from 'assert';

export class UsersRepository {
  private static instance: UsersRepository;

  private constructor() {
    /* Singleton private constructor */
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.instance) {
      this.instance = new UsersRepository();
    }

    return UsersRepository.instance;
  }

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
