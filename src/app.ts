import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import car from './Routes/Car.Routes';

const app = express();
app.use(express.json());
app.use('/cars', car);
app.use(ErrorHandler.handle);
export default app;
