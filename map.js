// map allows you to take one array and converted into a new array so all the items in the array
// going to look slightly different
/*
A function that accepts up to three arguments. The map method calls the callbackfn function
one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that 
contains the results.
*/

/* This method is superConvinient when you want to take an object here(just name ,key), or take 
one array and convert it into another array */
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
  { name: 'Phone', price: 500 },
];

const itemsNames = items.map((item) => {
  return item.name;
});

const itemsNames1 = items.map((item) => {
  return item.price;
});

console.log(itemsNames, itemsNames1);
/*[
  'Bike',     'TV',
  'Album',    'Book',
  'Computer', 'Keyboard',
  'Phone'
] [
  100,  200, 10,
    5, 1000, 25,
  500
]
*/
