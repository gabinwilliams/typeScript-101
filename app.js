"use strict";
// undecided at this time, but more restrictive than any
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// requires any extra type check to let TS know you want to assign it a string
if (typeof userInput === 'string') {
    userName = userInput;
}
// TS infers this as void, but we can hard type it to never which clearly tells developers this function will never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
