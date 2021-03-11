import express, { Router, Request, Response, NextFunction } from 'express';
import { sseRouter } from './sse.router';
import { systemRouter } from './system.router';

const router: Router = express.Router();
router.use('/events', sseRouter);
router.use('/system', systemRouter);

export const v1Router = router;
