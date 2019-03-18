import { Car, Plane, isCar } from '../type-guard';
import { Book } from '../pick';

describe('type guard and predicates', () => {
  test('type guard predicate `x is Y` function return type', () => {
    function takesCar(car: Car) {
      return car.drive();
    }
    function takesPlane(plane: Plane) {
      return plane.fly();
    }

    const vehicle = Math.random() > 0.5 ? new Car() : new Plane();
    let sound: string;
    if (isCar(vehicle)) {
      sound = takesCar(vehicle);
    } else {
      sound = takesPlane(vehicle);
    }

    expect(sound).toBe(vehicle instanceof Car ? 'Vroom' : 'Zoom');
  });
});

describe('picking and plucking types from a complex type', () => {
  test('I can get a subtype out of a type', () => {
    const myBook: Book = {
      author: {
        firstName: 'Jared',
        lastName: 'Henderson',
      },
    };

    // method 1/? make a named type out of `typeof x.y`
    type NamedPerson = typeof myBook.author;
    function fullName(person: NamedPerson) {
      return `${person.firstName} ${person.lastName}`;
    }

    expect(fullName(myBook.author)).toBe('Jared Henderson');

    // method 2/? use the typeof directly in an annotation
    function sortedName(person: typeof myBook.author): string {
      return `${person.lastName}, ${person.firstName}`;
    }

    expect(sortedName(myBook.author)).toBe('Henderson, Jared');
  });
});
