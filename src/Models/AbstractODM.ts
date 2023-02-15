import {
  Schema,
  Model,
  model,
  models,
} from 'mongoose';

export default abstract class AbstractODM<T> {
  model: Model<T>;
  constructor(nameModel: string, schema: Schema) {
    this.model = models[nameModel] || model(nameModel, schema);
  }
}