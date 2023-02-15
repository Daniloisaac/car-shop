import MotorCyclesDomain from '../Domains/Motorcycle';
import IMotorCycles from '../Interfaces/IMotorcycle';
import MotorCycles from '../Models/MotorCycles.model';

export default class MotorCyclesService {
  private createMotorCyclesDomain(motor: IMotorCycles | null): MotorCyclesDomain | null {
    if (motor) {
      return new MotorCyclesDomain(motor);
    }
    return null;
  }

  public async MotorCreate(motor: IMotorCycles) {
    const motorODM = new MotorCycles();
    const newMotorCycles = await motorODM.createMotorCycles(motor);
    return this.createMotorCyclesDomain(newMotorCycles);
  }
}