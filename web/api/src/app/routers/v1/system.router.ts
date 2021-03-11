import express, { Router, Request, Response, NextFunction } from 'express';
import { SystemController } from '../../controllers';
import { systemNodeRouter } from './system-node';

const router: Router = express.Router();
const systemController: SystemController = new SystemController();

router.get('/status', async (req: Request, res: Response, next: NextFunction) => {
  await systemController.getSystemStatus(req, res, next);
});

router.use('/node', systemNodeRouter);

export const systemRouter: Router = router;
