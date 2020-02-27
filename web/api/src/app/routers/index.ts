import express, { Router, Request, Response } from 'express';
import { authenticationRouter } from './authentication.router';

const router: Router = express.Router();
router.use('/auth', authenticationRouter);

export const applicationRouter: Router = router;
