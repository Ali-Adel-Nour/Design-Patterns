
class Observer {
    update(itemName) {
        throw new Error("update method must be implemented");
    }
    
    getID() {
        throw new Error("getID method must be implemented");
    }
}

// Customer class implementing Observer
class Customer extends Observer {
    constructor(id) {
        super();
        this.id = id;
    }
    
    update(itemName) {
        console.log(`Sending email to customer ${this.id} for item ${this.itemName}`);
    }
    
    getID() {
        return this.id;
    }
}


class Subject {
    register(observer) {
        throw new Error("register method must be implemented");
    }
    
    deregister(observer) {
        throw new Error("deregister method must be implemented");
    }
    
    notifyAll() {
        throw new Error("notifyAll method must be implemented");
    }
}

// Item class implementing Subject
class Item extends Subject {
    constructor(name) {
        super();
        this.observerList = [];
        this.name = name;
        this.inStock = false;
    }
    
    updateAvailability() {
        console.log(`Item ${this.name} is now in stock`);
        this.inStock = true;
        this.notifyAll();
    }
    
    register(observer) {
        this.observerList.push(observer);
    }
    
    deregister(observer) {
        this.observerList = this.removeFromArray(this.observerList, observer);
    }
    
    notifyAll() {
        for (const observer of this.observerList) {
            observer.update(this.name);
        }
    }
    
    removeFromArray(observerList, observerToRemove) {
        return observerList.filter(observer => 
            observer.getID() !== observerToRemove.getID()
        );
    }
}


function newItem(name) {
    return new Item(name);
}


function main() {
    const shirtItem = newItem("Nike Shirt");
    
    const observerFirst = new Customer("abc@gmail.com");
    const observerSecond = new Customer("xyz@gmail.com");
    
    shirtItem.register(observerFirst);
    shirtItem.register(observerSecond);
    
    shirtItem.updateAvailability();
}


main();