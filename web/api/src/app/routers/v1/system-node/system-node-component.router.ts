import express, { NextFunction, Request, Response, Router } from 'express';
import { SystemNodeComponentController } from '../../../controllers';

const router: Router = express.Router({ mergeParams: true });
const systemNodeComponentController: SystemNodeComponentController = new SystemNodeComponentController();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  systemNodeComponentController.createComponent(req, res, next);
});

router
  .route('/:componentId')
  .put(async (req: Request, res: Response, next: NextFunction) => {
    systemNodeComponentController.updateComponent(req, res, next);
  })
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    systemNodeComponentController.deleteComponent(req, res, next);
  });

export const systemNodeComponentRouter: Router = router;
