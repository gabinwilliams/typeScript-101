
// undecided at this time, but more restrictive than any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// requires any extra type check to let TS know you want to assign it a string

if (typeof userInput === 'string') {
  userName = userInput;

}