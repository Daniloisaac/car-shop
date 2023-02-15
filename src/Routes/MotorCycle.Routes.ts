import { Router } from 'express';
import MotorCyclesController from '../Controllers/MotorCycles.controller';

const routes = Router();

routes.post('/', (req, res, next) => new MotorCyclesController(req, res, next).create());

export default routes;