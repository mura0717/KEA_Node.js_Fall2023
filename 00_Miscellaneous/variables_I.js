// use const whenever possible
const scheduledBreakTime = "09:27";
let consoleLogCounter = 0;

//Use comma in console log to give space in between
console.log("Let's take a break at:", scheduledBreakTime);
consoleLogCounter++;

//String, Number, Boolean, BigInteger, undefined, null, Object, Symbol
//Object: Object, Array, Date

//type coercion

// 3 ways to make strings

console.log("The first way '' ");
console.log('The second way "" ');
console.log(`The ${2+1}rd way  ${scheduledBreakTime} `);
consoleLogCounter += 3
console.log(consoleLogCounter);

