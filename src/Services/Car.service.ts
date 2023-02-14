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

  public async getCars() {
    const carODM = new Car();
    const allCars = await carODM.getCars();
    const cars = allCars.map((car) => ({
      id: car._id,
      model: car.model, 
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue, 
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    }));
    return cars;
  }
  public async getCarById(id: string) {
    const carODM = new Car();

    const carById = await carODM.getCarById(id);
    if (!carById) return { status: 404, messageError: 'Car not found' }; 
    if (carById) {
      const car = [{
        id: carById._id,
        model: carById.model, 
        year: carById.year,
        color: carById.color,
        status: carById.status,
        buyValue: carById.buyValue, 
        doorsQty: carById.doorsQty,
        seatsQty: carById.seatsQty,
      }];
      return { status: 200, message: car };
    }
  }
}