import express from 'express';
import { TemperatureController } from '../controllers/temperatureController.js';

const router = express.Router();
const controller = new TemperatureController();

router.post('/temperatures', (req, res) => controller.create(req, res));
router.get('/temperatures', (req, res) => controller.list(req, res));

export { router as temperatureRoutes };