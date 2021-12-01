// Spread
//  This operator is used to splitup Array elements or object properties
// We use it only in case of Arrays and Objects
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // [ 1, 2, 3, 4, 5, 6 ]

// Rest
// used to merge a list of function arguments into an array
// we use it in the function argument list
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 4, 5)); // [1]
