import express, { Router, Request, Response, NextFunction } from 'express';
import { SseMiddleware } from '../../middlewares';
import { SseController } from '../../controllers';

const router: Router = express.Router();
const sseController: SseController = new SseController();
router.get('/', SseMiddleware.enrich, (req: Request, res: Response, next: NextFunction) =>
  sseController.subscribe(req, res),
);

export const sseRouter: Router = router;
