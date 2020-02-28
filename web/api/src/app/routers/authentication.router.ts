import express, { Router } from 'express';
import { AuthenticationController } from '../controllers';

const router: Router = express.Router();
const authenticationController: AuthenticationController = new AuthenticationController();
router.post('/', authenticationController.authenticate);

export const authenticationRouter: Router = router;
