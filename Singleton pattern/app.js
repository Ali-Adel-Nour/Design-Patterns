class NotificationManager {
  // 1. A static property to hold the single instance

  static instance = null; // The constructor is where you can put any initial setup logic. // It's not responsible for the Singleton check.

  constructor() {
    console.log("Creating a new NotificationManager instance...");
  } // 2. The static method that provides access to the instance

  static getInstance() {
    // 3. The crucial check: if no instance exists, create one

    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    } 

    return NotificationManager.instance;
  }

  showNotification() {
    return "Weclome Back";
  }
}

const manager = NotificationManager.getInstance().showNotification();
console.log(manager);

//const manager1 = NotificationManager.getInstance();

//const manager2 = NotificationManager.getInstance();

//console.log(manager1 === manager2);
