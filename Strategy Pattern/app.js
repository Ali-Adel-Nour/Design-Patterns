class CreditCardPayment {
  constructor(cardNumber, name) {
    this.cardNumber = cardNumber;
    this.name = name;
  }
  
  pay(amount) {
    console.log(`[💳 Credit Card] Payment of $${amount} processed for: ${this.name}. Transaction Successful.`);
  }
}

class PayPalPayment {
  constructor(address) {
    this.address = address;
  }
  
  pay(amount) {
    console.log(`[🅿️ PayPal] Payment of $${amount} processed for account: ${this.address}. Transaction Successful.`);
  }
}


class Checkout {
  // Stores the currently selected strategy
  constructor(paymentStrategy) {
    this.strategy = paymentStrategy;
  }
  
  // Allows the strategy to be swapped at runtime
  setStrategy(newStrategy) {
    this.strategy = newStrategy;
    console.log(`\n--- Strategy switched to ${newStrategy.constructor.name} ---`);
  }
  
  processOrder(amount) {
    // This is the core of the pattern! It delegates the action
    // to the currently held strategy via the common 'pay()' interface.
    this.strategy.pay(amount); 
  }
}

// Define the Concrete Strategies
const myCard = new CreditCardPayment('4111-XXXX-XXXX-1234', 'John Doe');
const myPayPal = new PayPalPayment('john.doe@example.com');

// Create the Context with an initial strategy (Credit Card)
const storeCheckout = new Checkout(myCard);

// Process the order using the initial strategy
storeCheckout.processOrder(50.00);

// Change the strategy at runtime
storeCheckout.setStrategy(myPayPal);

// Process the same order using the new strategy
storeCheckout.processOrder(150.00);