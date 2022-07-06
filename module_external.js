"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayData = exports.name = void 0;
exports.name = "John Doe"; // export keyword is used to export the variable name, else it will not work in namespace
function displayData(value) {
    //return name;
    return value; //use value from the namespace file
}
exports.displayData = displayData;
