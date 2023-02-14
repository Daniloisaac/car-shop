import ICar from '../Interfaces/ICar';

export default class CarDomain {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string; 
  protected status?: boolean;
  protected buyValue: number;  
  private doorsQty: number;
  private seatsQty: number;
 
  constructor(params: ICar) {
    this.id = params.id;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.status = params.status || false;
    this.buyValue = params.buyValue;  
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
  }

  protected set Id(id: string | undefined) {
    this.id = id;
  }

  protected get Id() {
    const re = this.id;
    return re;
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

  protected set Status(status: boolean | undefined) {
    this.status = status;
  }

  protected get Status() {
    return this.status;
  }

  protected setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  protected getBuyValue() {
    return this.buyValue;
  }
}
