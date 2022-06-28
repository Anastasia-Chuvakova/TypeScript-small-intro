"use strict";
let car = {
    brand: 'BMW',
    engine: 3.4,
    run: function () {
        console.log('running 100 miles/hour');
    }
};
//EXAMPLE1
car.brand = 'Audi'; //works since it is a string as declared initially ('BMW' <= is a string)
//EXAMPLE2: if you uncomment the line below, it will throw an error
//car.brand = 55; //error since it is a different type from declared initially ('BMW' <= is not a number)
