import { AuthenticatedUser } from '../../models';

export interface IAuthenticationService {
  authenticateUser(username: string, password: string): Promise<AuthenticatedUser>;
}
