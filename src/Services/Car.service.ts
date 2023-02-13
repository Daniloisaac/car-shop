import CarDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import Car from '../Models/Cars.model';

export default class CarService {
  private createCarDomain(car: ICar | null): CarDomain | null {
    if (car) {
      return new CarDomain(
        car,
      );
    }
    return null;
  }

  public async CarCreate(car: ICar) {
    const carODM = new Car();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }
}