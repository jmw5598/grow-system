import express, { Router, Request, Response, NextFunction } from 'express';
import { v1Router } from './v1';

const router: Router = express.Router();
router.use('/v1', v1Router);

export const apiRouter: Router = router;
