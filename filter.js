// Arrary filter method
// returns a new filtered array

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
  { name: 'Phone', price: 500 },
];

// filter items thats not under 100$(i.e. above 100$)
/* 
filter(predicate: (value: { name: string; price: number; }, index: number, 
array: { name: string; price: number; }[]) => value is { name: string; price: number; }, 
thisArg?: any): { name: string; price: number; }[]
A function that accepts up to three arguments. The filter method calls the predicate 
function one time for each element in the array.

Returns the elements of an array that meet the condition specified in a callback function.
*/
const filteredItems = items.filter((item) => {
  return item.price >= 100; // generally here is a true or false condition
});
console.log(filteredItems);

// >= greate than or equal to
// <= less than or equal to
