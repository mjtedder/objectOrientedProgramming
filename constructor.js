// OOP (Object Oriented Programming) JavaScript
//===============================================================================

// Constructor function
function Car (name, year, make) {
    this.name = name,
    this.year = year,
    this.make = make
}

// Call constructor function to instantiate an object

const prius = new Car ("Prius", 2017, "Toyota");

const mazda = new Car ("3", 2005, "Mazda");

const tesla = new Car ("Model 3", 2020, "Tesla");

// Prints "Tesla" to the console

// Prints 2017 to the console

// Prints "3" to the console

