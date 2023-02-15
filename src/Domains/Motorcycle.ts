import IMotorCycles from '../Interfaces/IMotorcycle';

export default class MotorCyclesDomain {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(params: IMotorCycles) {
    this.id = params.id;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.status = params.status || false;
    this.buyValue = params.buyValue;
    this.category = params.category;
    this.engineCapacity = params.engineCapacity;
  }

  protected setId(id: string) {
    this.id = id;
  }

  protected getId() {
    return this.id;
  }

  protected setModel(model: string) {
    this.model = model;
  } 

  protected getModel() {
    return this.model;
  }

  protected setYear(year: number) {
    this.year = year;
  }

  protected getYear() {
    return this.year;
  }

  protected setColor(color: string) {
    this.color = color;
  }

  protected getColor() {
    return this.color;
  }

  protected setStatus(status: boolean) {
    this.status = status;
  }

  protected getStatus() {
    return this.status;
  }

  protected getBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }  

  protected setBuyValue() { 
    return this.buyValue;
  }
}