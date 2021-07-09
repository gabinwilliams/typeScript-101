"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
printResult(add(5, 12));
// let combineValues: Function;
let combineValues;
combineValues = add;
// will throw error because we make sure to let TS know we want two parameters, numbers and to return a number
// combineValues = printResult;
// giving combineValues a type of function helps us avoid a runtime error below
// combineValues = 5;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
