import express, { Router, Request, Response } from 'express';
import { AuthenticationController } from '../controllers';

const router: Router = express.Router();
const authenticationController: AuthenticationController = new AuthenticationController();
router.get('/users', authenticationController.authenticate);

export const applicationRouter: Router = router;
