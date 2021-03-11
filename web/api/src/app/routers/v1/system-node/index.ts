import express, { Router } from 'express';
import { systemNodeComponentRouter } from './system-node-component.router';
import { relayRouter } from './relay.router';
import { temperatureHumidityRouter } from './temperature-humidity.router';

const router: Router = express.Router();

router.use('/:nodeId/component', systemNodeComponentRouter);
router.use('/:nodeId/relay', relayRouter);
router.use('/:nodeId/temphum', temperatureHumidityRouter);

export const systemNodeRouter: Router = router;
