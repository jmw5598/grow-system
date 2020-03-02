import bcrypt from 'bcrypt';
import { IAuthenticationService, ITokenService, JwtTokenService } from './';
import { User } from '../data';
import { AuthenticatedUser, UserDetails } from '../models';
import { IUsersRepository, UsersRepository } from '../repositories';

export class AuthenticationService implements IAuthenticationService {
  private readonly _usersRepository: IUsersRepository;
  private readonly _tokenService: ITokenService;

  constructor() {
    this._usersRepository = new UsersRepository();
    this._tokenService = new JwtTokenService();
  }

  public async authenticateUser(username: string, password: string): Promise<AuthenticatedUser> {
    const user: User = await this._usersRepository.findByUsername(username);

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isPasswordValid: boolean = await this._validatePassword(user, password);

    if (!isPasswordValid) {
      throw new Error('Invalid username or password');
    }

    // @@@ TODO figure out token expiration?
    const userDetails: UserDetails = new UserDetails(username, user.roles.map(role => role.role));
    const accessToken: string = await this._tokenService.generateToken(userDetails);

    return new AuthenticatedUser(userDetails, accessToken, new Date());
  }

  private async _validatePassword(user: User, password: string): Promise<boolean> {
    return await bcrypt.compare(password, user.password)
      .then((isValid: boolean) => {
        if (isValid)
          return true;
        else
          return false;
      });
  }
}
