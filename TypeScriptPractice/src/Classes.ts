class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    console.log('Hello, ' + this.greeting);
  }
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters} meters`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

var snake = new Snake('snake1');
snake.move(1213);

/**
 * understanding private, protected
 */
abstract class AnimalPrivate {
  private name: string;
  abstract makeSound(): void;
  constructor(name: string) {
    this.name = name;
  }
}
class Rhino extends AnimalPrivate {
  constructor(name: string) {
    super(name)
  }
  makeSound() {
    console.log('ohhhhhhhhhhhhhh.......');
  }
}
class EmployeePrivate {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let rhino = new Rhino('rhino');
let employeePrivate = new EmployeePrivate('Bob'); 

// employeePrivate = rhino;  // 不能将类型“Rhino”分配给类型“EmployeePrivate”。 类型具有私有属性“name”的单独声明。

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Employee extends Person {
  protected department: string;
  constructor (name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name}, and I work in ${this.department}`;
  }
}
let howard = new Employee('Howard', 'Sales');
howard.getElevatorPitch();
// console.log(howard.name);

class Octopus {
  readonly numberOfLegs: number;
  constructor (readonly name: string) {
  }
}
const octopus1 = new Octopus('No.1');
console.log(octopus1.name)

/**
 * Static Properties
 * We can also create static members of a class,
 * those that are visible on the class itself rather than on the instances. 
 */
class Grid {
  static origin = { x: 0, y: 0 };
  constructor(public scale: number) {
  }
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
      let xDist = point.x - Grid.origin.x;
      let yDist = point.y - Grid.origin.y;
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) / this.scale;
  }
}
let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

