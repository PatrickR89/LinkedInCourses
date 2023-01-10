// console.log("Hello world!");

// callback example
// const calc = () => {
//   return 4 * 4;
// };

// const printCalc = (callback) => {
//   console.log(callback);
// };

// printCalc(calc());

let instance = null;

// class pattern

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const civic = new Car(4, "V6", "grey");

console.log(civic);

// constructor pattern

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const cx5 = new SUV(4, "V8", "red");
console.log(cx5);

// singleton pattern

class SecondCar {
  constructor(engine, transmission, suspension, seats) {
    if (!instance) {
      this.engine = engine;
      this.transmission = transmission;
      this.suspension = suspension;
      this.seats = seats;
      instance = this;
    } else {
      return instance;
    }
  }
}

let miata = new SecondCar("I4", "5 speed", "sport", 4);
let smart = new SecondCar("I3", "4spd auto", "bah", 2);

console.log(miata);
console.log(smart);

// factory pattern

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "I4", "green");
      case "cx5":
        return new Car(4, "V8", "red/gray");
      default:
        break;
    }
  }
}

const factory = new CarFactory();

const secondHonda = factory.createCar("civic");

console.log(secondHonda);

// abstract factory pattern

class Crossover {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CrossoverFactory {
  createCar(type) {
    switch (type) {
      case "santaFe":
        return new Car(4, "I4", "green");
      case "cx5":
        return new Car(4, "V8", "red/gray");
      default:
        break;
    }
  }
}
const crossoverFactory = new CrossoverFactory();

const autoManifacturer = (type, model) => {
  switch (type) {
    case "car":
      return factory.createCar(model);
    case "crossover":
      return crossoverFactory.createCar(model);

    default:
      break;
  }
};

const newCX5 = autoManifacturer("crossover", "cx5");
console.log(newCX5);
