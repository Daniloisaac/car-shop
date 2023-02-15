import { NextFunction, Request, Response } from 'express';
import IMotorCycles from '../Interfaces/IMotorcycle';
import MotorCyclesService from '../Services/MotorCycles.service';

export default class MotorCyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorCyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorCyclesService();
  }

  public async create() {
    const motorCycles: IMotorCycles = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorCycle = await this.service.MotorCreate(motorCycles);
      return this.res.status(201).json(newMotorCycle);
    } catch (error) {
      this.next(error);
    }
  }
}