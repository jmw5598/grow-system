import { Request, Response, NextFunction } from 'express';
import { JwtTokenService, ITokenService } from '../services';

// @@@ RETHINK THIS.
export class JwtMiddleware {
  public static async verify(req: Request, res: Response, next: NextFunction): Promise<any> {
    const token: string = JwtMiddleware.getTokenFromHeader(req);
    const jwtService: ITokenService = JwtTokenService.getInstance();
    const valid: boolean = await jwtService.verifyToken(token);

    return valid ? next() : res.status(401).send({ error: 'Unauthorized' });
  }

  public static async hasRole(role: string): Promise<Function> {
    return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const token: string = JwtMiddleware.getTokenFromHeader(req);
      const jwtService: ITokenService = JwtTokenService.getInstance();
      const decoded: any = await jwtService.decodeToken(token);
      const foundRole: boolean = decoded.payload.roles.find((e: any) => e.role === role);

      return foundRole ? next() : res.status(403).send({ error: 'Access Denied' });
    };
  }

  public static async hasAllRoles(roles: string[]): Promise<Function> {
    return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const token: string = JwtMiddleware.getTokenFromHeader(req);
      const jwtService: ITokenService = JwtTokenService.getInstance();
      const decoded: any = await jwtService.decodeToken(token);
      const foundAllRoles: boolean = roles.every((e: string) => decoded.payload.roles.find((i: any) => i.role === e));

      return foundAllRoles ? next() : res.status(403).send('Access Denied');
    };
  }

  public static async hasAnyRole(roles: string[]): Promise<Function> {
    return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const token: string = JwtMiddleware.getTokenFromHeader(req);
      const jwtService: ITokenService = JwtTokenService.getInstance();
      const decoded: any = await jwtService.decodeToken(token);
      const foundAllRoles: boolean = roles.some((e: string) => decoded.payload.roles.find((i: any) => i.role === e));

      return foundAllRoles ? next() : res.status(403).send('Access Denied');
    };
  }

  private static getTokenFromHeader(req: Request): string {
    const bearer: string = req.header('Authorization') || '';
    const [prefix, token]: string[] = bearer.split(' ');

    return token;
  }
}
