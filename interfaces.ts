
//Defining and using Interface in TypeScript
interface AutomobileInterface{

    brand: string;
    speed: number;
    speedMethod(speed:number):void;
    
}

const automobile: AutomobileInterface = {
    brand: "BMW",
    speed: 200,
    speedMethod(){
        //console.log("Speed is: " + this.speed);
        console.log(`this ${this.brand} is going ${this.speed} km/h`);
    }

}

//Imprementing Interfaces to functions

function car1(automobile:AutomobileInterface){
    automobile.speed = 300;

    console.log(`This is a ${automobile.brand} is going ${automobile.speed} km/h`);

}
car1(automobile);

//Imprementing Interfaces to classes

class AutoMobileClass implements AutomobileInterface{
    brand!: string; //defining the properties with "!"
    speed!: number; //defining the properties with "!"

    speedMethod(speed: number){
        console.log(`hi, this car is going at ${speed} km/h`);
    }
}

let carObject = new AutoMobileClass();
carObject.speedMethod(1000);

//Interface Inheritance

interface AutomobileInterface1{

    brand?: string; // "?" after name makes this parameter optional
    speed?: number; // "?" after name makes this parameter optional
    speedMethod?(speed:number):void; // "?" after name makes this parameter optional
    
}


//child interface
interface AutomobileInterface2 extends AutomobileInterface1{
    brand: string; // overwriting the optional parameter to required again
    speed?: number; // "?" after name makes this parameter optional
    speedMethod?(speed:number):void;
}

const automobile2: AutomobileInterface2 = {
    brand: "Volvo",
    speed: 210,
    speedMethod(){
        console.log(`this ${this.brand} is going ${this.speed} km/h`);
    }
}
