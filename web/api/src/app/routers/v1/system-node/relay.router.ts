import express, { NextFunction, Request, Response, Router } from 'express';
import { RelayController } from '../../../controllers';

const router: Router = express.Router({ mergeParams: true });
const relayController: RelayController = new RelayController();

router.route('/:relayId/command').patch(async (req: Request, res: Response, next: NextFunction) => {
  relayController.issueCommand(req, res, next);
});

export const relayRouter: Router = router;
