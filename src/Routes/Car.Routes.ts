import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const routes = Router();

routes.post('/', (req, res, next) => new CarController(req, res, next).create());
routes.get('/', (req, res, next) => new CarController(req, res, next).getCars());
routes.get('/:id', (req, res, next) => new CarController(req, res, next).getCarById());

export default routes;