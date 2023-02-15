import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import car from './Routes/Car.Routes';
import motorcycles from './Routes/MotorCycle.Routes';

const app = express();
app.use(express.json());
app.use('/cars', car);
app.use('/motorcycles', motorcycles);
app.use(ErrorHandler.handle);
export default app;
