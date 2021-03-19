import express, { NextFunction, Request, Response, Router } from 'express';
import { TemperatureHumidityController } from '../../../controllers';

const router: Router = express.Router({ mergeParams: true });
const temperatureHumidityController: TemperatureHumidityController = new TemperatureHumidityController();

router.route('/:sensorId/command').patch(async (req: Request, res: Response, next: NextFunction) => {
  temperatureHumidityController.issueCommand(req, res, next);
});

export const temperatureHumidityRouter: Router = router;
