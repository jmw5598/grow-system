import { Request, Response, NextFunction } from 'express';

export class JwtMiddleware {
  public static verify(req: Request, res: Response, next: NextFunction): any {
    const token: string = JwtMiddleware.getTokenFromHeader(req);
    const valid: boolean = JwtService.getInstance().verify(token);
    
    return valid ? next() : res.status(401).send({ error: 'Unauthorized' });
  }

  public static hasRole(role: string): Function {
    return (req: Request, res: Response, next: NextFunction): any => {
      const token: string = JwtMiddleware.getTokenFromHeader(req);
      const decoded: any = JwtService.getInstance().decodeToken(token);
      
      const foundRole: boolean = decoded.payload.roles
        .find((e: any) => e.role === role);
      
      return foundRole ? next() : res.status(403).send({ error: 'Access Denied' });
    };
  }

  public static hasAllRoles(roles: string[]): Function {
    return (req: Request, res: Response, next: NextFunction): any => {
      const token: string = JwtMiddleware.getTokenFromHeader(req);
      const decoded: any = JwtService.getInstance().decodeToken(token);
      
      const foundAllRoles: boolean = roles.every((e: string) => decoded.payload.roles.find((i: any) => i.role === e))

      return foundAllRoles ? next() : res.status(403).send('Access Denied');
    }
  }

  public static hasAnyRole(roles: string[]): Function {
    return (req: Request, res: Response, next: NextFunction): any => {
      const token: string = JwtMiddleware.getTokenFromHeader(req);
      const decoded: any = JwtService.getInstance().decodeToken(token);
      
      const foundAllRoles: boolean = roles.some((e: string) => decoded.payload.roles.find((i: any) => i.role === e))

      return foundAllRoles ? next() : res.status(403).send('Access Denied');
    }
  }

  private static getTokenFromHeader(req: Request): string {
    const bearer: string = req.header('Authorization') || '';
    const [prefix, token]: string[] = bearer.split(' ');

    return token;
  }
}