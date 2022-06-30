"use strict";
const automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod() {
        //console.log("Speed is: " + this.speed);
        console.log(`this ${this.brand} is going ${this.speed} km/h`);
    }
};
//Imprementing Interfaces to functions
function car1(automobile) {
    automobile.speed = 300;
    console.log(`This is a ${automobile.brand} is going ${automobile.speed} km/h`);
}
car1(automobile);
//Imprementing Interfaces to classes
class AutoMobileClass {
    speedMethod(speed) {
        console.log(`hi, this car is going at ${speed} km/h`);
    }
}
let carObject = new AutoMobileClass();
carObject.speedMethod(1000);
const automobile2 = {
    brand: "Volvo",
    speed: 210,
    speedMethod() {
        console.log(`this ${this.brand} is going ${this.speed} km/h`);
    }
};
