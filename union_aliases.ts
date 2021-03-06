
// You can use an aliases type as well to make things smoother
type Combinable = number | string;

function combine(input1: number | string, input2: number | string) {
  let result;
  // Good practice to have a runtime check when using Unions
  if (typeof input1 === 'number' && typeof input2 === 'number' ) {
    result = input1 + input2;
  }else {
    result = input1.toString() + input2.toLocaleString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);

