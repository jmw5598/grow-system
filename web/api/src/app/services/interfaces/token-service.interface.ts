import { UserDetails } from '../../models';

export interface ITokenService {
  generateToken(userDetails: UserDetails): Promise<string>;
  verifyToken(accessToken: string): Promise<boolean>;
  decodeToken(accessToken: string): Promise<string | { [key: string]: any } | null>;
}
