

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result:' + num);
  
}

printResult(add(5, 12)); 

let combineValues: Function;

combineValues = add;
combineValues = 5;

console.log(combineValues(8, 8));
