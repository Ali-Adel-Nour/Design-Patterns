//Products
class Truck {
  constructor(trackingId) {
    this.trackingId = trackingId;
  }
  
  deliver() {
    console.log(`[🚛 Truck] Delivering package ${this.trackingId} by road.`);
  }
}

class Ship {
  constructor(trackingId) {
    this.trackingId = trackingId;
  }
  
  deliver() {
    console.log(`[🚢 Ship] Delivering package ${this.trackingId} by sea.`);
  }
}


 // Creator
class Logistics {
  // This is the Factory Method! It centralizes the object creation decision.
  createTransport(type, trackingId) {
    if (type === 'road') {
      return new Truck(trackingId);
    } else if (type === 'sea') {
      return new Ship(trackingId);
    } else {
      throw new Error(`Unknown Transport Type: ${type}`);
    }
  }
}


// Create the Factory instance
const factory = new Logistics();

// The client code asks the factory to create a Product, based on a decision
const roadDelivery = factory.createTransport('road', 'TRK-456');
const seaDelivery = factory.createTransport('sea', 'SHIP-789');

// The client only cares that the object has a deliver() method
console.log('--- Orders are being processed ---');
roadDelivery.deliver();
seaDelivery.deliver();