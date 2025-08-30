// Base Component class
class Component {
    operation() {
        throw new Error("operation() must be implemented");
    }
}

// Concrete Component provides default implementation
class ConcreteComponent extends Component {
    operation() {
        return 'ConcreteComponent';
    }
}

// Base Decorator class
class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }

    operation() {
        return this.component.operation();
    }
}

// Concrete Decorator A
class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

// Concrete Decorator B
class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

// Client code
function clientCode(component) {
    console.log(`RESULT: ${component.operation()}`);
}

// Simple component
const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log('');

// Decorated component
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);