"use strict";
//There are more types in typescript, that are not in this document.
//https://www.typescriptlang.org/docs/handbook/basic-types.html
//Example of types1 (TypeScript allows us statically define types)
let vehicle; //will always be a string
let engine; //will always be a number
let isFast; //will always be a boolean
let anyData1; //will accept any type since we did not define a type
let anyData2; //will accept any type since we did not define a type
//WILL work types1
vehicle = 'car'; //string
engine = 3.4; //number
isFast = true; //boolean
anyData1 = 'hey'; //will accept any type
anyData1 = 3.4; //will accept any type
anyData2 = 'hello again'; //will accept any type
anyData2 = 7777777777777; //will accept any type
//WILL NOT work types1 and will trhow an error if uncommented (because it is not declared data types)
// vehicle = 1;
// engine = "engine name";
// isFast = 2; 
//////<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>>//////
//Example of  types2
let sweets1 = ['cake', 'ice cream', 'cookies']; //array of strings
let sweets2 = ['cake', 'ice cream', 'cookies']; //array of any type
let sweets3 = ['cake', 'ice cream', 'cookies']; //any type
let sweets4; //empty array
let numbers = [1, 2, 3, 4, 5]; //array of numbers
//WILL work types2
sweets1 = ['candy', 'chocolate', 'ice cream']; //array of strings
sweets1 = ["toffee"]; //array of strings
sweets2 = [1, 2, 3]; //array of any type
sweets2 = [1, true, "any type and this one is a string"]; //array of any type
sweets3 = [444, 'EASY', false]; //any type
numbers = [4444, 44]; //array of numbers
//WILL NOT work types2 and will throw an error if uncommented (because it is not declared data types)
//sweets1 = "toffee"; //will not work since it is not an array of strings
//sweets1 = [1]; //will not work since it is not an array of strings\\
//sweets1 = [1,2,3]; // will not work because it  wrond data type: an array of numbers
//sweets4 = [true]; //will not work because it is not []
//numbers = [true, false]; //will not work because it is not an array of numbers
//////<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>>//////
//Example of types3
function cal1(val1, val2) {
    let total = val1 + val2;
    return total;
}
cal1(1, 2); //will return 3
// or you can use the following syntax:
function cal2(val1, val2) {
    let total = val1 + val2;
    return total;
}
cal2(1, 2); //will return 3
//BOTH will work with numbers only
//BOTH WILL NOT work with any other data type and will throw an error
