import jwt, { VerifyErrors } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { ITokenService } from './interfaces/token-service.interface';
import { UserDetails, AuthenticatedUser } from '../models';

const authConfigPath: string = path.resolve(__dirname, '../config/authentication.json');
const privateKeyPath: string = path.resolve(__dirname, '../config/private.key');
const publicKeyPath: string = path.resolve(__dirname, '../config/public.key');

export class JwtTokenService implements ITokenService {
  private static instance: ITokenService;
  private readonly _authConfig: any;
  private readonly _privateKey: string;
  private readonly _publicKey: string;

  constructor() {
    this._authConfig = JSON.parse(fs.readFileSync(authConfigPath, 'utf8'));
    this._privateKey = fs.readFileSync(privateKeyPath, 'utf8');
    this._publicKey = fs.readFileSync(publicKeyPath, 'utf8');
  }

  public static getInstance(): ITokenService {
    if (!JwtTokenService.instance) {
      JwtTokenService.instance = new JwtTokenService();
    }

    return JwtTokenService.instance;
  }

  // @@@ TODO figure out token expirations???
  public async generateToken(user: UserDetails): Promise<string> {
    return jwt.sign({ ...user }, this._privateKey, this._authConfig.options);
  }

  public async verifyToken(accessToken: string): Promise<boolean> {
    jwt.verify(accessToken, this._publicKey, function(err: VerifyErrors, decoded: any) {
      if (err) {
        return false;
      }
    });

    return true;
  }

  public async decodeToken(accessToken: string): Promise<string | { [key: string]: any } | null> {
    return jwt.decode(accessToken, { complete: true });
  }
}
