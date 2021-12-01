// Three types of functions
// 1. function declaration aka function statement

function a() {
  console.log('a called');
}

// 2. function expression
var b = function () {
  console.log('b called');
};

// 3. Arrow function
let c = () => {
  console.log('C called');
};

// 4. Anonymous function
// function () {

// }

// function expression
var b = function xyz() {
  console.log(xyz);
};
// Here this will log the function xyz but
xyz(); // this will give an error
b(); // this will not give an error
