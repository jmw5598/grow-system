import { User } from '../data';

export interface IUsersRepository {
  findByUsername(username: string): Promise<User | undefined>; 
}
