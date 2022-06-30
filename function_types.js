"use strict";
function stringFunc() {
    console.log("I am a string");
}
function cal(val1, val2) {
    let total = val1 + val2;
    return total;
}
cal(1, 2); //will return 3
//option1
let universal;
universal = cal;
console.log(universal(1, 2)); //will return 3
//other options
// let universal: ()=>string;
// universal = stringFunc;
// let universal = stringFunc;
//universal(); //will return I am a string
//let universal = cal;
//console.log(universal(1,2)); //will return 3
