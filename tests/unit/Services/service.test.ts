import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/Car.service';

describe('Testando o "Car.service" ', function () {
  it('Deveria lista todos os carros com SUCESSO', async function () {
    const mockCar = [
      {
        _id: '63ecea0d4578ffadafc9e562',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        _id: '63ecea0d4578ffadafc9e564',
        model: 'Marea',
        year: 2002,
        color: 'red',
        status: true,
        buyValue: 15.00,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        _id: '63ecea0d4578ffadafc9e566',
        model: 'Marea',
        year: 2002,
        color: 'white',
        status: true,
        buyValue: 14.00,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        _id: '63ecea0d4578ffadafc9e568',
        model: 'Marea',
        year: 2002,
        color: 'pink',
        status: true,
        buyValue: 18.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    const mockCarResult: ICar[] = [
      {
        id: '63ecea0d4578ffadafc9e562',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63ecea0d4578ffadafc9e564',
        model: 'Marea',
        year: 2002,
        color: 'red',
        status: true,
        buyValue: 15.00,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63ecea0d4578ffadafc9e566',
        model: 'Marea',
        year: 2002,
        color: 'white',
        status: true,
        buyValue: 14.00,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63ecea0d4578ffadafc9e568',
        model: 'Marea',
        year: 2002,
        color: 'pink',
        status: true,
        buyValue: 18.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    sinon.stub(Model, 'find').resolves(mockCar);

    const service = new CarService();
    const result = await service.getCars();

    expect(result).to.be.deep.equal(mockCarResult);
    sinon.restore();
  });
  it('Deveria lista os carros pelo id com SUCESSO', async function () {
    const mockCarById = {
      _id: '63ecea0d4578ffadafc9e562',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const mockCarByIdResult = [{
      id: '63ecea0d4578ffadafc9e562',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    }];

    sinon.stub(Model, 'findById').resolves(mockCarById);

    const service = new CarService();
    const result = await service.getCarById('63ecea0d4578ffadafc9e562');

    expect(result?.message).to.be.deep.equal(mockCarByIdResult);

    sinon.restore();
  });

  it('Deveria editar um carro pelo id com SUCESSO', async function () {
    const mockEditedCar = {
      _id: '63ecea0d4578ffadafc9e562',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 12.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const mockCarByIdEditedResult = [{
      id: '63ecea0d4578ffadafc9e562',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 12.99,
      doorsQty: 4,
      seatsQty: 5,
    }];

    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockEditedCar);
    sinon.stub(Model, 'findById').resolves(mockEditedCar);

    const service = new CarService();
    const result = await service.editingCarById('63ecea0d4578ffadafc9e562', mockEditedCar);

    expect(result?.message).to.be.deep.equal(mockCarByIdEditedResult);

    sinon.restore();
  });

  it('Deveria criar os carros com SUCESSO', async function () {
    const mockCarById = {
      id: '63ecea0d4578ffadafc9e562',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const mockCarByIdResult = {
      id: '63ecea0d4578ffadafc9e562',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'create').resolves({ ...mockCarById });
    
    const service = new CarService();
    const result = await service.CarCreate(mockCarById);
    
    expect(result).to.be.deep.equal(mockCarByIdResult);

    sinon.restore();
  });
});