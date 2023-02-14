import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue, 
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.CarCreate(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCars() {
    try {
      const allCars = await this.service.getCars();
      
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarById() {
    try {
      const { id } = this.req.params;
      
      const carById = await this.service.getCarById(id as string);
      if (carById?.messageError) {
        return this.res.status(carById.status).json({ message: carById?.messageError });
      }
      if (carById?.message) {
        return this.res.status(carById.status).json(carById.message[0]);
      }
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
