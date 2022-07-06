//older syntax
// import Object1 = require("./module_external");
// console.log(Object1.displayData("Heey this is Aja Mobani AGAIN"));
////////////////////////////////////////////

//es6 other syntax 2015
//import everytning from "./module_external";
// import * as Object from "./module_external";
// console.log(Object.displayData("Heey this is Aja Mobani AGAIN and AGAAIN"));

//or import only what we need
//import {name, displayData} from "./module_external"; //without an alias
import {name as myName, displayData} from "./module_external"; //with an alias
console.log(displayData("Heey this is Aja Mobani AGAIN and AGAAIN"));
//console.log(name);// if without and alias
console.log(myName);// if with an alias