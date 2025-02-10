import express from 'express';
import { TemperatureController } from '../controllers/temperatureController.js';

const router = express.Router();
const controller = new TemperatureController();

router.post('/temperatures', controller.create);
router.get('/temperatures', controller.list);

export { router as temperatureRoutes };