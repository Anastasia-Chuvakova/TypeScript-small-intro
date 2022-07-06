//detecting input data type as an example. use <TYPE>
function displayData1<TYPE>(someData: TYPE) {
    let someOtherData: TYPE;
    return someData;
}

console.log(displayData1(222));

// function displayData2(someData:number) {
//     return someData;
// }
// console.log(displayData2(224));

// function displayData3(someData:string) {
//     return someData;
// }
// console.log(displayData3(5002));