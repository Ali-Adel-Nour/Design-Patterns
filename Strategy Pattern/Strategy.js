// Define the Strategy "interface" as a convention (not enforced in JS)

// Concrete strategy for sorting data
class SortStrategy {
    // Implements the sorting algorithm
    doAlgorithm(data) {
        return data.sort(); // Sorts the array in ascending order
    }
}

// Concrete strategy for reversing data
class ReverseStrategy {
    // Implements the reversing algorithm
    doAlgorithm(data) {
        return data.reverse(); // Reverses the array
    }
}

// Context class that uses a strategy
class Context {
    // Constructor accepts a strategy and stores it
    constructor(strategy) {
        this.strategy = strategy;
    }

    // Executes the strategy on the provided data
    execute(data) {
        // Calls the strategy's algorithm and prints the result
        console.log(this.strategy.doAlgorithm(data).join(','));
    }
}

// Create a context with the SortStrategy
const context = new Context(new SortStrategy());
// Execute the context's strategy on an array (will sort)
context.execute(['a', 'b', 'c', 'd', 'e']); // Output: a,b,c,d,e

// Create a context with the ReverseStrategy
const context2 = new Context(new ReverseStrategy());
// Execute the context's strategy on an array (will reverse)
context2.execute(['a', 'b', 'c', 'd', 'e']); // Output: e,d,c,b,a