// this works similar to some, but some doens not check for every value. If it finds a single
// value which satisfies the condition then it returns true, but 'every' checks for all the
// values, if all the values satisfies the condition then it returns true else returns false

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
  { name: 'Phone', price: 500 },
];

const hasInexpensiveItems = items.every((item) => {
  return item.price < 100; // condition
});

console.log(hasInexpensiveItems); // here some will return true, every will return false
