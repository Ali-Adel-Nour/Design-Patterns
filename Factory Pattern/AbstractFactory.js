// Abstract Product A
class Engine {
  start() {
    throw new Error("start() must be implemented");
  }
}

// Abstract Product B
class Wheel {
  roll() {
    throw new Error("roll() must be implemented");
  }
}

// Concrete Products (extend abstracts)
class FordEngine extends Engine {
  start() {
    console.log("Ford V8 engine started");
  }
}

class TeslaEngine extends Engine {
  start() {
    console.log("Tesla Electric engine started");
  }
}

class FordWheel extends Wheel {
  roll() {
    console.log("Ford wheels rolling");
  }
}

class TeslaWheel extends Wheel {
  roll() {
    console.log("Tesla wheels rolling");
  }
}

// Abstract Factory
class AbstractFactory {
  createEngine() {
    throw new Error("createEngine() must be implemented");
  }
  createWheel() {
    throw new Error("createWheel() must be implemented");
  }
}

// Concrete Factories (extend abstract)
class FordFactory extends AbstractFactory {
  createEngine() {
    return new FordEngine();
  }
  createWheel() {
    return new FordWheel();
  }
}

class TeslaFactory extends AbstractFactory {
  createEngine() {
    return new TeslaEngine();
  }
  createWheel() {
    return new TeslaWheel();
  }
}


const fordFactory = new FordFactory();
const teslaFactory = new TeslaFactory();

const fordEngine = fordFactory.createEngine();
const fordWheel = fordFactory.createWheel();

console.log("--- Creating Ford Parts ---");
fordEngine.start();
fordWheel.roll();

const teslaEngine = teslaFactory.createEngine();
const teslaWheel = teslaFactory.createWheel();

console.log("\n--- Creating Tesla Parts ---");
teslaEngine.start();
teslaWheel.roll();
