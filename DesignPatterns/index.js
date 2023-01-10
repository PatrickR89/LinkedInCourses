// module pattern
import express from "express";
import calc from "./calc.js";

const res = calc();

const app = express();
const port = 3000;

console.log(res);

// Mixin pattern

let carMixin = {
  revEngine() {
    console.log("wroom!!!");
  }
};

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}
// add the mixin function to whatever instance is created from Car class
Object.assign(Car.prototype, carMixin);

let newCar = new Car(4, "I4", "black");
newCar.revEngine();

// Facade pattern
// code imported from another module and used in it's shorter version than original

// Flyweight pattern
// similar to singleton
// prevent creation of another instance

//Decorator pattern
// very similar to mixins - typescript, add created function with @

app.get("/", (req, res) => {
  res.send(`server running on port ${port}`);
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
