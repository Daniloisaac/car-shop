import {
  Schema,
  Model,
  model,
  models,
} from 'mongoose';

import IMotorCycles from '../Interfaces/IMotorcycle';

export default class MotorCycles {
  private _schema: Schema;
  private _model: Model<IMotorCycles>;

  constructor() {
    this._schema = new Schema<IMotorCycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this._model = models.MotorCycles || model('MotorCycles', this._schema);
  }
  
  public async createMotorCycles(motor: IMotorCycles): Promise<IMotorCycles> {
    const createMotorCycles = await this._model.create({ ...motor });
    return createMotorCycles;
  }
}