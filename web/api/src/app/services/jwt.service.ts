import jwt, { VerifyErrors } from 'jsonwebtoken';
import fs from 'fs';

export class JwtService {
  private static instance: JwtService;
  private readonly _authConfig: any;
  private readonly _privateKey: string;
  private readonly _publicKey: string;

  private constructor() {
    this._authConfig = JSON.parse(fs.readFileSync('config/authentication.json', 'utf8'));
    this._privateKey = fs.readFileSync('config/private.key', 'utf8');
    this._publicKey = fs.readFileSync('config/private.key', 'utf8');
  }

  public static getInstance(): JwtService {
    if (!JwtService.instance) {
      JwtService.instance = new JwtService();
    }

    return JwtService.instance;
  }

  public signToken(payload: any): string {
    return jwt.sign(payload, this._privateKey, this._authConfig.options);
  }

  public verifyToken(token: string): boolean {
    jwt.verify(token, 'shhhhh', function(err: VerifyErrors, decoded: any) {
      if (err) {
        return false;
      } 
    });

    return true;
  }

  public decodeToken(token: string): string | {[key: string]: any} | null {
    return jwt.decode(token, { complete: true });
  }
}