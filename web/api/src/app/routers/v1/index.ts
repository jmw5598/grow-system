import express, { Router, Request, Response, NextFunction } from 'express';
import { sseRouter } from './sse.router';

const router: Router = express.Router();
router.use('/events', sseRouter);

export const v1Router = router;
