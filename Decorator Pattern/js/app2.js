class Coffee {
  cost() {
    return 10;
  }

  description() {
    return 'Simple coffee';
  }
}

class Milk {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return this.coffee.description() + ' with milk';
  }
}



const simpleCoffee = new Coffee();


const coffeeWithMilk = new Milk(simpleCoffee);

console.log('Final cost:', coffeeWithMilk.cost());
console.log('Final description:', coffeeWithMilk.description());

