import express, { NextFunction, Request, Response, Router } from 'express';

const router: Router = express.Router({ mergeParams: true });
// const temperatureHumidityController: TemperatureHumidtyController = new TemperatureHumidtyController();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  console.log('Temp hum router works!');
});

export const temperatureHumidityRouter: Router = router;
