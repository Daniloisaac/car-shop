import {
  Schema,
  Model,
  model,
  models,
  Types,
} from 'mongoose';

import ICar from '../Interfaces/ICar';  

export default class Car {
  private _schema: Schema; 
  private _model: Model<ICar>;

  constructor() {
    this._schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true }, 
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },

    });
    this._model = models.Car || model('Car', this._schema);
  }

  public async create(car:ICar): Promise<ICar> {
    const createCar = await this._model.create({ ...car });
    return createCar;
  }

  public async getCars() {
    const allCars = await this._model.find({}, { __v: 0 });
    
    return allCars;
  }

  public async getCarById(id: string) {
    const { ObjectId } = Types;
    const carById = await this._model.findById(new ObjectId(id));  
    return carById;
  }

  public async editingCarById(id: string, reqBody: ICar) {
    const { ObjectId } = Types;

    await this._model.findByIdAndUpdate(new ObjectId(id), {
      model: reqBody.model,
      year: reqBody.year,
      color: reqBody.color,
      status: reqBody.status,
      buyValue: reqBody.buyValue,
      doorsQty: reqBody.doorsQty,
      seatsQty: reqBody.seatsQty,
      
    }, { new: true }); 

    const car = await this._model.findById(new ObjectId(id), { __v: 0 });  
    
    return car;
  }
}