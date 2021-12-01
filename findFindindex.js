// Here is the explanation of find method for Reference type data

const personData = [
  { name: 'manual', age: 33 },
  { name: 'Vaibhav', age: 30 },
];

// this find structure is for reference values such as arrays full of objects
const manual = personData.find((item, indexOfItem, personData) => {
  // we have to return a boolean here
  return item.name === 'manual';
});

console.log(manual); // { name: 'manual', age: 33 } , we always get the first element
// it return the same object in personData , it doesnt return the copy
// Hence, we can directly change the value
manual.name = 'Anna';
console.log(personData); //[ { name: 'Anna', age: 33 }, { name: 'Vaibhav', age: 30 } ]

// findIndex()

const AnnaIndex = personData.findIndex((item, indexOfItem, personData) => {
  return item.name === 'Anna';
});
console.log(AnnaIndex); // 0

//
// find retutns the actual elemet and hece we cant modify the data
// findIndext returns the index of the element
