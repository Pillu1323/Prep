// find allows you to find single object in an array

/* find calls predicate(i.e. Callback function's true or false condition) once for each
 element of the array, in ascending order, until it finds one where predicate returns true. 
 If such an element is found, find immediately returns that 
 element value. Otherwise, find returns "UNDEFINED".
Returns the value of the "FIRST" element in the array where predicate is true, and undefined 
otherwise.*/
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
  { name: 'Phone', price: 500 },
];

const foundItem = items.find((item) => {
  return item.name === 'Book'; // true or false statement
});

console.log(foundItem);
