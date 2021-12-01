// At global level this is equivalent to global but,

console.log(this === global); // false, Because in JS file this equates to module.exports
// not global

function rajat() {
  console.log(this === global); // true
}
rajat();

// when we use strict mode the value of this is undefined.

// In Arrow function
// lexical this is passed as a scope in arrow function
