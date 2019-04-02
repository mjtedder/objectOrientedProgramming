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
console.log(tesla.make);

// Prints 2017 to the console
console.log(prius.year);

// Prints "3" to the console
console.log(mazda.name);

//ES6 Class constructor================================================
//=========================================================================================
class Vehicle {
    constructor(name, year, make, mileage) {
        this.name = name;
        this.year = year;
        this.make = make;
        this.mileage = 3000;
    }
    roadTrip() {
        this.mileage += 400;
    }
    static staticMethod() {
        console.log("I only am bound to the Vehicle class, not an object.");
    }
}

const volvo = new Vehicle ("V60", 2018 ,"Volvo")

// This method increases mileage by 400.
volvo.roadTrip();
console.log(volvo.mileage);

console.log("Prints undefined, because it's an object not a class: " + volvo.staticMethod);

Vehicle.staticMethod();

//