// Use const whenever possible to avoid overwriting variables
const scheduledbBreakTime = "09:27";
let consoleLogCounter = 0;

// Use comma in console log to separate variables and strings
console.log("let's take a break at:", scheduledbBreakTime);
consoleLogCounter++;

// String, Number, Boolean, BigInteger, undefined, null, Object, Symbol
// Objects: object, Array, Date

// type coercion

// The 3 ways to make strings
console.log("This is the first ''' way");
console.log('This is the second """ way');
console.log(`This is the ${2+1}rd ''' """ way ${scheduledbBreakTime}
`);

consoleLogCounter += 3;

console.log(consoleLogCounter)