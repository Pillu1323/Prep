// add (2)(3)
function add(a) {
  return function add1(b) {
    return a + b;
  };
}
console.log(add(2)(3)); //5

//2
var addition = function (a) {
  return function (b) {
    return a + b;
  };
};
console.log(add(2)(3)); //5

//3
const add = (a) => (b) => a + b;
console.log(add(2)(3));
