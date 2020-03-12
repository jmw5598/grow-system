import express, { Router, Request, Response } from 'express';
import { authenticationRouter } from './authentication.router';
import { apiRouter } from './api.router';

const router: Router = express.Router();
router.use('/auth', authenticationRouter);
router.use('/api', apiRouter);

export const applicationRouter: Router = router;
