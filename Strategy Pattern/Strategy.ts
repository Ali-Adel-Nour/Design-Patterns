// Define the Strategy interface with a method for processing data
interface Strategy {
    // Method to process an array of strings and return a new array
    doAlgorithm(data: string[]): string[];
}

// Concrete strategy for sorting data
class AscendingSortStrategy implements Strategy {
    // Implements the sorting algorithm
    doAlgorithm(data: string[]): string[] {
        return data.sort(); // Sorts the array in ascending order
    }
}

// Concrete strategy for reversing data
class TSReverseStrategy implements Strategy {
    // Implements the reversing algorithm
    doAlgorithm(data: string[]): string[] {
        return data.reverse(); // Reverses the array
    }
}

// Context class that uses a strategy
class TsContext {
    // Constructor accepts a strategy and stores it
    constructor(private strategy: Strategy) {}

    // Executes the strategy on the provided data
    execute(data: string[]): void {
        // Calls the strategy's algorithm and prints the result
        console.log(this.strategy.doAlgorithm(data).join(','));
    }
}

// Create a context with the AscendingSortStrategy
const tscontext = new Context(new AscendingSortStrategy());
// Execute the context's strategy on an array (will sort)
context.execute(['a', 'b', 'c', 'd', 'e']); // Output: a,b,c,d,e

// Create a context with the ReverseStrategy
const tscontext2 = new Context(new ReverseStrategy());
// Execute the context's strategy on an array (will reverse)
context2.execute(['a', 'b', 'c', 'd', 'e']); // Output: e,d,c,b,a