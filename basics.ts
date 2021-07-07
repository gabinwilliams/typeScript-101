
///////  Test 1 ///////

// const button = document.querySelector("button") as HTMLButtonElement;
// // ! tells ts that there the input will not be null 
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;


// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// })

///////  Test 2 ///////

function add(num1: number, num2: number, showResult: boolean) {

  if(showResult) {
    console.log(num1 + num2);
    
  }else {
    
    return num1 + num2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(number1, number2, printResult);


