var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "John Doe"; // export keyword is used to export the variable name, else it will not work in namespace
    function displayData(value) {
        //return name;
        return value; //use value from the namespace file
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
///<reference path="module.ts" />
var thisSpace = myNameSpace.displayData;
console.log(thisSpace("Hello this is Aja Mobani"));
