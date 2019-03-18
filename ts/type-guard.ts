export function isCar(vehicle: Vehicle): vehicle is Car {
  // return Vehicle instanceof Car; // <-- also works
  return (<Car>vehicle).drive !== undefined;
}

abstract class Vehicle {}

export interface ICar {
  drive(): string;
}

export interface IPlane {
  fly(): string;
}

export class Car extends Vehicle implements ICar {
  public drive(): string {
    return 'Vroom';
  }
}

export class Plane extends Vehicle implements IPlane {
  public fly(): string {
    return 'Zoom';
  }
}
