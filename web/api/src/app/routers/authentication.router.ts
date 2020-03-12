import express, { Router, Request, Response, NextFunction } from 'express';
import { AuthenticationController } from '../controllers';

const router: Router = express.Router();
const authenticationController: AuthenticationController = new AuthenticationController();
router.post('/tokens', (req: Request, res: Response, next: NextFunction) =>
  authenticationController.authenticate(req, res, next),
);

export const authenticationRouter: Router = router;
