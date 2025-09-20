class WeatherDisplay {
  constructor(name) {
    this.name = name;
  }
  
  update(temperature) {
    console.log(`${this.name} has been updated with a new temperature: ${temperature} degrees.`);
  }
}

class WeatherStation {
  constructor() {
    this.observers = [];
  }
  
  register(observer) {
    this.observers.push(observer);
    console.log(`${observer.name} has been registered.`);
  }
  
  unregister(observer) {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${observer.name} has been unregistered.`);
    }
  }
  
  notify(temperature) {
    console.log(`Weather Station: Notifying observers of new temperature: ${temperature} degrees.`);
    for (const observer of this.observers) {
      observer.update(temperature);
    }
  }
}


// 1. Create a subject (the Weather Station)
const weatherStation = new WeatherStation();

// 2. Create some observers (the displays)
const display1 = new WeatherDisplay('Kitchen Display');
const display2 = new WeatherDisplay('Living Room Display');

// 3. Register the observers with the subject
weatherStation.register(display1);
weatherStation.register(display2);

// 4. Notify the observers of a change!
weatherStation.notify(75);

// Let's remove one and notify again
weatherStation.unregister(display2);
weatherStation.notify(78);